import { Prise }  from '../models/prise.model'

export class Seance{
  constructor(
    public meteoId: Number,

    public Titre: String,

    public  description:String,

    public prises : [Prise]

  ){}
}
