import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DataMeteo } from '../models/datameteo.model';
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

getMeteobyDateandPlace(year:String, month:String, day:String, place: String ): Observable<DataMeteo>{
  const headers = new HttpHeaders().set("Content-Type", "application/json");
  let dateString=  year +"-"+ month+"-"+ day;
  return this.http.get<DataMeteo>(NODE_API_URL + '/meteo/one/'+dateString +"/"+place, { headers}).pipe(catchError(this.handleError))

}


private handleError(error: Response | any) {
  return throwError(error);
}

}
