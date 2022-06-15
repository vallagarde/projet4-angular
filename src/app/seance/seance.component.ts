import { Component, OnInit } from '@angular/core';
import { JavapiService } from '../api/javapi.service';
import { Seance } from '../models/seance.model';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.scss']
})
export class SeanceComponent implements OnInit {

  form: any ={
    seance: Seance
  }
  isAccepted = false;
  userId = -1;

  constructor(private javapiService: JavapiService, private tokenStorage: TokenStorageService) {
    this.isAccepted= false;
    this.userId = this.tokenStorage.getUser().id;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.javapiService.createSeance(this.form.seance, this.userId).subscribe(
    data => {
      this.isAccepted =true;
    }
    )
  }

}
