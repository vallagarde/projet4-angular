import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MeteoPreference } from '../models/preferencemeteo.model';
import { TokenStorageService } from '../_services/token-storage.service';


const METEO_PREFERENCE_API = environment.Java_Api_Url+"/meteo/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MeteoPreferenceServiceService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  createMeteoPreference( meteoPreference :MeteoPreference): Observable<MeteoPreference>{

    return this.http.post<MeteoPreference>(METEO_PREFERENCE_API +"preference", {
      meteoPreference
    } ,httpOptions)
  }

  createMeteoPreferenceRaw( tempMin: Number, tempMax: Number, ventMin: Number, ventMax: Number,latitude:Number, longitude:Number): Observable<MeteoPreference>{

    return this.http.post<MeteoPreference>(METEO_PREFERENCE_API +"preference", {
      tempMin,
      tempMax,
      ventMin,
      ventMax,
      latitude,
      longitude
    } ,httpOptions)
  }
  getAllMeteoPreference (): Observable<MeteoPreference[]>{

    return this.http.get<MeteoPreference[]>(METEO_PREFERENCE_API +"preferences",httpOptions);
  }

  deleteMeteoPreference(id: Number): Observable<MeteoPreference>{
    return this.http.delete<MeteoPreference>(METEO_PREFERENCE_API+"preference/"+id, httpOptions)
  }

  updateMeteoPreference(meteoPreference: MeteoPreference): Observable<MeteoPreference>{

    return this.http.put<MeteoPreference>(METEO_PREFERENCE_API +"preference", {
      meteoPreference
    } ,httpOptions);
  }

}
