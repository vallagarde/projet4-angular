import { Component, OnInit } from '@angular/core';
import { JavapiService } from '../api/javapi.service';
import { Seance } from '../models/seance.model';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.scss']
})
export class SeancesComponent implements OnInit {

  constructor(private javapi : JavapiService) { }

seances :Seance[]= [];

  ngOnInit(): void {
    this.javapi.getSeances().subscribe( data => {this.seances=data}
      )
  }

}
