import { Prise }  from '../models/prise.model'
import { DataMeteo } from './datameteo.model';

export class Seance{
  constructor(
    public meteoId: Number,

    public meteoIndex: Number,

    public titre: String,

    public  description:String,

    public prises: Array<Prise>,

    public meteodata: DataMeteo,

    public iconUrl: string,

    public dates: Date

  ){}
}
