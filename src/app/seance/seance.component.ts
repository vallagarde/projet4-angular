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
  userMail = "";

  constructor(private javapiService: JavapiService, private tokenStorage: TokenStorageService) {
    this.isAccepted= false;
    this.userMail = this.tokenStorage.getUser().email;
  }

  ngOnInit(): void {
  }

  createSeance(): void {

    this.javapiService.createSeance(this.form.seance.titre, this.form.seance.description , this.userMail).subscribe(
    data => {
      this.isAccepted =true;
    }
    )
  }

}
