import { DataMeteo } from '../models/datameteo.model';

export class Meteo{
   constructor(
     public meteoId: string,
     public DataMeteo: any[],
     public city_name: string,
     public lon : Number,
     public timezone : String,
     public lat : Number,
     public country_code : String,
     public state_code : String
   ){}
}
