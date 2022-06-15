import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Seance } from '../models/seance.model'

const Seance_API = 'http://localhost:5000/api/seance/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JavapiService {

  constructor(private http: HttpClient) { }

  private handleError(error: Response | any) {
    return throwError(error);
  }

  createSeance( seance: Seance): Observable<Seance>{
    return this.http.post<Seance>(Seance_API+ "/seances", seance, httpOptions);
  }

}







