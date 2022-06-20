import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NodeapiService } from '../api/nodeapi.service';
//import { Meteo } from '../models/meteo.model';
import { DataMeteo } from '../models/datameteo.model';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Prise } from '../models/prise.model';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  constructor(private api: NodeapiService, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    //this.getMeteos();
  }

  model!: NgbDateStruct;
  date!: {year: number, month: number};
  city_name = '';
  _meteo : DataMeteo | undefined;



  getMeteo(cityName:string){
    this.api.getMeteobyDateandPlace(this.model, cityName)
    .subscribe(
      (data) => {this._meteo = data}
    )




  }

  validateMeteo(){
    this.childToParent.emit(this._meteo);
  }

  @Output()
  childToParent = new EventEmitter<DataMeteo>();

  selectToday() {
    this.model = this.calendar.getToday();
  }


}
