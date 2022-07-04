import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { NodeapiService } from '../api/nodeapi.service';
//import { Meteo } from '../models/meteo.model';
import { DataMeteo } from '../models/datameteo.model';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Prise } from '../models/prise.model';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';
import { formatDate } from '@angular/common';

import * as _moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
const moment = _moment;



@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
  providers: []
})
export class MeteoComponent implements OnInit {

  constructor(private api: NodeapiService, private calendar: NgbCalendar) { }

  ngOnInit(): void {

  }

  model= moment();
  selDate!: string;
  selDay!: string;
  selMonth!: string;
  selYear!: string;

  @Input()
  lat!: Number;


  @Input()
  long!: Number;


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.model = moment(event.value);
    this.selDate = this.model.format('DD');
    this.selDay = this.model.format('dddd');
    this.selMonth = this.model.format('MM');
    this.selYear = this.model.format('YYYY');
  }


  city_name = '';
  _meteo : DataMeteo | undefined;




  getMeteo(cityName:string){
    this.api.getMeteobyDateandPlace(this.selYear,this.selMonth,this.selDate, cityName)
    .subscribe(
      (data) => {this._meteo = data}
    )
  }


  getMeteobyCoords(){
    this.api.getMeteobyDateandCoords(this.selYear,this.selMonth,this.selDate, [this.lat, this.long]).subscribe(
      (data) => {this._meteo = data}
    )
  }


  validateMeteo(){
    this.getMeteobyCoords();
    this.childToParent.emit(this._meteo);
  }

  @Output()
  childToParent = new EventEmitter<DataMeteo>();



}
