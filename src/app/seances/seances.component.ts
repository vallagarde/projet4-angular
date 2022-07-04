import { Component, OnInit } from '@angular/core';
import { JavapiService } from '../api/javapi.service';
import { NodeapiService } from '../api/nodeapi.service';
import { DataMeteo } from '../models/datameteo.model';
import { Seance } from '../models/seance.model';
import { faWind, faDroplet, faDropletSlash, faHourglassEmpty } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.scss']
})
export class SeancesComponent implements OnInit {

  constructor(private javapi : JavapiService, private nodeapi:NodeapiService) { }

seances :Seance[]= [];
_meteos :DataMeteo[] =[];
_meteo!: DataMeteo;
iconUrl!:string;
iconUrls : string[]=[];
dataSource:any[]=[];
displayedColumns: string[] = ["Lieu","Espece","Taille","Poids"];


isActivated:Boolean=false;

faWind= faWind;
faDroplet= faDroplet;
faDropletSlash=faDropletSlash;

  ngOnInit(): void {
    this.javapi.getSeances().subscribe( data => {
      this.seances=data
      });

  }
  findMeteo(seance : number){

         this.nodeapi.getMeteoByIdAndIndex(this.seances[seance].meteoId,this.seances[seance].meteoIndex ).subscribe(data => {
        //this._meteos.push(data);
        this.seances[seance].meteodata = data;
        this.iconUrl ="https://www.weatherbit.io/static/img/icons/"+this.seances[seance].meteodata.weather.icon+".png";
        this.seances[seance].iconUrl =this.iconUrl;
      })
      //this.isActivated=true;


  }

  findMeteobySeance(seance : Seance){

    this.nodeapi.getMeteoByIdAndIndex(seance.meteoId,seance.meteoIndex ).subscribe(data => {
   //this._meteos.push(data);
    seance.meteodata = data;
   this.iconUrl ="https://www.weatherbit.io/static/img/icons/"+seance.meteodata.weather.icon+".png";
   seance.iconUrl =this.iconUrl;
   this.dataSource = seance.prises;

 })
 //this.isActivated=true;


}


}
