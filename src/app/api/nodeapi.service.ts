import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Meteo } from '../models/meteo.model';

const NODE_API_URL=environment.Node_Api_Url;
@Injectable({
  providedIn: 'root'
})
export class NodeapiService {

  constructor(private http: HttpClient) { }


getMeteobyId(meteoId: number): Observable<Meteo>{
  const headers = new HttpHeaders().set("Content-Type", "application/json");
  return this.http.get<Meteo>(NODE_API_URL + '/meteo'+meteoId , { headers}).pipe(catchError(this.handleError))

}

getMeteos(): Observable<Meteo[]>{
  const headers = new HttpHeaders().set("Content-Type", "application/json");
  return this.http.get<Meteo[]>(NODE_API_URL + '/meteo', { headers}).pipe(catchError(this.handleError))

}

getMeteobyDateandPlace(date: {year: number, month: number, day: number}, place: String ): Observable<Meteo>{
  const headers = new HttpHeaders().set("Content-Type", "application/json");
  return this.http.get<Meteo>(NODE_API_URL + '/one/'+date +"/"+place, { headers}).pipe(catchError(this.handleError))

}


private handleError(error: Response | any) {
  return throwError(error);
}

}
