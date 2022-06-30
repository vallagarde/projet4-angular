import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(private authService:AuthService, private route: ActivatedRoute) { }

  verif !:String;

  validation :Boolean = false;


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.verif = params['code'];
    })


    this.authService.verify(this.verif).subscribe( verifString =>{
      if (verifString){

        this.validation =verifString;
      }
    })

  }

}
