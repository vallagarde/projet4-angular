import { Component, OnInit } from '@angular/core';
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

  addPrise(){

    this.seance.createPrise(this.form.prise);

  }

}
