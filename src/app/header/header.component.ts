import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthServiceService } from '../authService/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthServiceService, private http: HttpClient, private router: Router) {
    this.auth.authenticate(undefined, undefined);
   }

   logout() {
     this.http.post('logout', {}).pipe(finalize(()=> {
       this.auth.authenticated = false;
       this.router.navigateByUrl('/login')
     })
     ).subscribe()
   }

  ngOnInit(): void {
  }

}
