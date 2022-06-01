import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Meteo } from '../models/meteo.model';

const API_URL = "";

@Injectable({
  providedIn: 'root'
})
export class JavapiService {

  constructor(private http: HttpClient) { }

  getMeteos(): Observable<Meteo[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Meteo[]>(API_URL + '/todos', { headers}).pipe(catchError(this.handleError))
  }

  private handleError(error: Response | any) {
    return throwError(error);
  }

}
