import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authenticated = false;

  constructor(private http : HttpClient) { }

  authenticate(credentials: { username: any; password: any; } | undefined, callback: { (): void; (): any; } | undefined){
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
  this.http.get('user', {headers: headers}).subscribe(response => {
    if (response) {
        this.authenticated = true;
    } else {
        this.authenticated = false;
    }
    return callback && callback();
  });
  }

}
