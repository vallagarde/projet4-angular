import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:5000/api/auth/';
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

  registerUser(username: string, email: string, password: string): Observable<any> {
    return this.register(username,email,password, ["user"])
  }

  registerAdmin(username: string, email: string, password: string): Observable<any> {
    return this.register(username,email,password, ["admin"])
  }

  registerMod(username: string, email: string, password: string): Observable<any> {
    return this.register(username,email,password, ["mod"])
  }
}