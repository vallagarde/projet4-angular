import { Component, OnInit } from '@angular/core';
import { JavapiService } from '../api/javapi.service';
import { Prise } from '../models/prise.model';
import { Seance } from '../models/seance.model';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.scss']
})
export class BoardUserComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private authService: AuthService, private javapi: JavapiService) { }

  form :any = {
    username:String,
    adresseMail:String,
    prenom: String,
    nom:String,
    adresse:String,
    ville:String,
    pays:String,
    codePostal:Number,
  }

  seances :Seance[]= [];
  prises : Prise[]=[];
  seancenb :any;
  prisenb:any;
  moyenne:any;


  ngOnInit(): void {

    this.javapi.getSeances().subscribe( data => {
      this.seances=data

      this.seancenb = this.seances.length;

      for (let seance of this.seances){
        this.prises = this.prises.concat(seance.prises);
        this.prisenb = this.prises.length;
      }

      this.moyenne = this.prisenb/this.seancenb;
    });

    this.form.username= this.tokenStorage.getUser().username;
    this.form.adresseMail= this.tokenStorage.getUser().email;
    this.form.adresse=this.tokenStorage.getUser().adresse;
    this.form.prenom=this.tokenStorage.getUser().prenom;
    this.form.nom=this.tokenStorage.getUser().nom;
    this.form.ville=this.tokenStorage.getUser().ville;
    this.form.pays=this.tokenStorage.getUser().pays;
    this.form.codePostal=this.tokenStorage.getUser().codePostal;

  }

  maj(){

    this.authService.update(this.form.prenom, this.form.nom, this.form.adresse, this.form.ville, this.form.pays, this.form.codePostal).subscribe(data => {

      this.logout();
    });

  }
  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
