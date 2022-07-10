import { Component, OnInit } from '@angular/core';
import { MeteoPreferenceServiceService } from '../api/meteo-preference-service.service';
import { MeteoPreference } from '../models/preferencemeteo.model';

@Component({
  selector: 'app-meteo-preference',
  templateUrl: './meteo-preference.component.html',
  styleUrls: ['./meteo-preference.component.scss']
})
export class MeteoPreferenceComponent implements OnInit {

  constructor(private metoPreferenceService: MeteoPreferenceServiceService) { }

  meteoPreferences: MeteoPreference[]=[];
  isCreating: Boolean= false;
  meteoPref!: MeteoPreference;

  form :any ={
    tempMin: Number,
    tempMax: Number,
    ventMin: Number,
    ventMax: Number,
    latitude: Number,
    longitude: Number
  }

  ngOnInit(): void {
    this.metoPreferenceService.getAllMeteoPreference().subscribe(
      (data)=> {
        this.meteoPreferences = data;
      },
      (err) => {
    })
  }

  ouvrirCreer(){
    this.isCreating=true;
  }
  creer(){


    this.metoPreferenceService.createMeteoPreferenceRaw(this.form.tempMin, this.form.tempMax, this.form.ventMin, this.form.ventMax, this.form.latitude, this.form.longitude).subscribe(data=>{

    })
    this.isCreating =false;
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }
  supprimer(id:Number){
    this.metoPreferenceService.deleteMeteoPreference(id).subscribe( data => {
      console.log("bien supprimé");
    })
  }



}
