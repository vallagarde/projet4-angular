import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DataMeteo } from '../models/datameteo.model';
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

  createSeance( titre: String, description: String,prises:Prise[], userEmail: String, _meteo:DataMeteo, coordonees:Number[], date: String ): Observable<Seance>{ //utilisé dans seance.component.ts
    const latitude= coordonees[0];
    const longitude = coordonees[1];

    console.log("dans le service: lat= "+ latitude)


    return this.http.post<Seance>(Seance_API+ "/seances", {
      description,
      titre,
      userEmail,
      prises,
      latitude : coordonees[0],
      longitude : coordonees[1],
      meteoId: _meteo.meteoId,
      meteoIndex: _meteo.index,
      date
    });
  }

  getSeances(): Observable<Seance[]>{
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get<Seance[]>(Seance_API + '/seances', { headers}).pipe(catchError(this.handleError))

  }


}









