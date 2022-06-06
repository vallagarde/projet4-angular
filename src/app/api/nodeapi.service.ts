import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Meteo } from '../models/meteo.model';

const API_URL= "https://projet4-node-s.herokuapp.com/api"

@Injectable({
  providedIn: 'root'
})
export class NodeapiService {

  constructor(private http: HttpClient) { }


getMeteobyId(meteoId: number): Observable<Meteo>{
  const headers = new HttpHeaders().set("Content-Type", "application/json");
  return this.http.get<Meteo>(API_URL + '/meteo'+meteoId , { headers}).pipe(catchError(this.handleError))

}

getMeteos(): Observable<Meteo[]>{
  const headers = new HttpHeaders().set("Content-Type", "application/json");
  return this.http.get<Meteo[]>(API_URL + '/meteo', { headers}).pipe(catchError(this.handleError))

}

private handleError(error: Response | any) {
  return throwError(error);
}

}
