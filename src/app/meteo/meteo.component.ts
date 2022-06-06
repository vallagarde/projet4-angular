import { Component, OnInit } from '@angular/core';
import { NodeapiService } from '../api/nodeapi.service';
import { Meteo } from '../models/meteo.model';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  constructor(private api: NodeapiService) { }

  ngOnInit(): void {
    this.getMeteos();
  }

  _meteos: Meteo[] = [];
  getMeteos(){
    this.api.getMeteos()
    .subscribe(
      (data) => {this._meteos=data}
    );
  }


}
