import { Component, OnInit } from '@angular/core';
import { NodeapiService } from '../api/nodeapi.service';
import { Meteo } from '../models/meteo.model';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  constructor(private api: NodeapiService, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    this.getMeteos();
  }

  model!: NgbDateStruct;
  date!: {year: number, month: number};
  city_name = '';
  _meteo :Meteo | undefined;
  _meteos: Meteo[] = [];

  getMeteos(){
    this.api.getMeteos()
    .subscribe(
      (data) => {this._meteos=data}
    );
  }

  getMeteo(){
    this.api.getMeteobyDateandPlace(this.model, this.city_name)
    .subscribe(
      (data) => {this._meteo=data}
    )
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }


}
