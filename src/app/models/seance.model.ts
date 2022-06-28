import { Prise }  from '../models/prise.model'

export class Seance{
  constructor(
    public meteoId: Number,

    public titre: String,

    public  description:String,

    public prises: Array<Prise>,

    public dates: Date

  ){}
}
