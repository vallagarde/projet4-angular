import { Component, OnInit } from '@angular/core';
import { JavapiService } from '../api/javapi.service';
import { DataMeteo } from '../models/datameteo.model';
import { Prise } from '../models/prise.model';
import { Seance } from '../models/seance.model';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {

  n: number=0;
  asPrise: Boolean= false;
  prises: Prise[]=[];

  asMeteo: Boolean =false;
  _meteo !: DataMeteo;


  form: any ={
    seance: Seance
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

    this.javapiService.createSeance(this.form.seance.titre, this.form.seance.description , this.prises, this.userMail).subscribe(
    data => {
      this.isAccepted =true;
    }
    )
  }

  createPrise(prise : Prise){
    let priseCloned : Prise =Object.assign({},prise); // clone pour le deep copy  de prise
    this.prises.push(priseCloned)
    this.asPrise=true;
  }

  getMeteo(dataMeteo: DataMeteo){

    this._meteo=dataMeteo;
    this.asMeteo=true;


  }

}