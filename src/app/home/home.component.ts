import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../authService/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Demo';
  greeting = {};

  constructor(private auth: AuthServiceService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

  authenticated() { return this.auth.authenticated; }
  ngOnInit(): void {
  }

}
