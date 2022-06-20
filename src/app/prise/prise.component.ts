import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Prise } from '../models/prise.model';
import { SeanceComponent } from '../seance/seance.component';

@Component({
  selector: 'app-prise',
  templateUrl: './prise.component.html',
  styleUrls: ['./prise.component.scss']
})
export class PriseComponent implements OnInit {

  constructor(private seance : SeanceComponent) { }

  form: any = {
    prise : Prise
  }

  ngOnInit(): void {
  }

  @Output()
  childToParent = new EventEmitter<Prise>();

  addPrise(){

    this.childToParent.emit(this.form.prise);
    this.form.prise.nomLieu ="";
    this.form.prise.coorLieu= null;
    this.form.prise.espece = "";
    this.form.prise.taille = null;
    this.form.prise.poids =null;

  }

}
