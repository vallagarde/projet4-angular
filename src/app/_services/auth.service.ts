import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


const AUTH_API = environment.Java_Api_Url;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, email: string, password: string, role: String[]): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      role
    }, httpOptions);
  }


  update(prenom: string, nom:string, adresse:string, ville:string, pays:string, codePostal:number): Observable<any> {
    //console.log("dans le update"+ nom+ " "+ adresse + " "+ ville + " "+ pays+" "+codePostal)
    return this.http.post(AUTH_API + "updateuser", {
      prenom,
      nom,
      adresse,
      ville,
      pays,
      codePostal
    }, httpOptions);
  }


  registerUser(username: string, email: string, password: string): Observable<any> {
    return this.register(username,email,password, ["user"])
  }

  registerAdmin(username: string, email: string, password: string): Observable<any> {
    return this.register(username,email,password, ["admin"])
  }

  registerMod(username: string, email: string, password: string): Observable<any> {
    return this.register(username,email,password, ["mod"])
  }

  verify(code:String): Observable<any>{
    return this.http.post(AUTH_API + "verify", {code}, httpOptions)
  }


}
