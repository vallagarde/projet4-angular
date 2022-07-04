import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { JavapiService } from '../api/javapi.service';
import { DataMeteo } from '../models/datameteo.model';
import { Prise } from '../models/prise.model';
import { Seance } from '../models/seance.model';
import { TokenStorageService } from '../_services/token-storage.service';
import { faWind, faDroplet, faDropletSlash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {

  markComp:any ={
    titre:String,
    description:String
  }

  onKeyTitre(event: any) { // without type info
    this.markComp.titre = event.target.value;
  }
  onKeyDesc(event: any) { // without type info
    this.markComp.description = event.target.value;
  }

  n: number=0;
  asPrise: Boolean= false;
  prises: Prise[]=[];
  iconUrl: String='';

  asMeteo: Boolean =false;
  _meteo !: DataMeteo;

  model!: NgbDateStruct;
  date!: {year: number, month: number};
  city_name = '';
  faWind= faWind;
  faDroplet= faDroplet;
  faDropletSlash=faDropletSlash;

  form: any ={
    seance: Seance,
    latitude:Number,
    longitude:Number
  }
  isAccepted = false;
  userMail = "";

  constructor(private javapiService: JavapiService, private tokenStorage: TokenStorageService) {
    this.isAccepted= false;
    this.userMail = this.tokenStorage.getUser().email;
  }

  ngOnInit(): void {
  }

  createSeance(): void {

    this.javapiService.createSeance(this.form.seance.titre, this.form.seance.description , this.prises, this.userMail, this._meteo, [this.form.latitude, this.form.longitude]).subscribe(
    data => {
      this.isAccepted =true;
    }
    )
  }

  createCoord(coords:any){
    this.form.latitude=coords.lat;
    this.form.longitude=coords.lng;

  }

  createPrise(prise : Prise){
    let priseCloned : Prise =Object.assign({},prise); // clone pour le deep copy  de prise
    this.prises.push(priseCloned)
    this.asPrise=true;
  }

  getMeteo(dataMeteo: DataMeteo){

    this._meteo=dataMeteo;
    this._meteo.wind_spd = Math.round((this._meteo.wind_spd*3.6)*100)/100
    this._meteo.rh = Math.round((this._meteo.rh)*100)/100
    this._meteo.precip = Math.round((this._meteo.precip)*100)/100

    this.iconUrl ="https://www.weatherbit.io/static/img/icons/"+this._meteo.weather.icon+".png"
    this.asMeteo=true;
  }

}
