import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Prise } from '../models/prise.model';
import { Seance } from '../models/seance.model'
import { TokenStorageService } from '../_services/token-storage.service';

const Seance_API = 'http://localhost:5000/api/seance';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class JavapiService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {

   }


  private handleError(error: Response | any) {
    return throwError(error);
  }

  createSeance( titre: String, description: String,prises:Prise[], userEmail: String): Observable<Seance>{
    return this.http.post<Seance>(Seance_API+ "/seances", {
      description,
      titre,
      userEmail
    });
  }

}







