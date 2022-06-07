import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from '../authService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  constructor(private auth: AuthServiceService, private http: HttpClient, private router: Router) { }

  login() {
    this.auth.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

  ngOnInit(): void {
  }

}
