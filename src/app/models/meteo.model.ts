export class Meteo{
   constructor(
     public meteoId: string,
     public data: any[],
     public city_name: string,
     public lon : Number,
     public timezone : String,
     public lat : Number,
     public country_code : String,
     public state_code : String
   ){}
}
