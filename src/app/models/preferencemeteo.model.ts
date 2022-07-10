export class MeteoPreference{
constructor(
  public  id: Number,

	public tempMin: Number,

	public tempMax: Number,

	public ventMin: Number,

	public ventMax: Number,

	public pluieMin: Number,

	public pluieMax: Number,

	public latitude: Number,

	public longitude: Number,

  public ajd : boolean,

  public dmn : boolean,
){}
}
