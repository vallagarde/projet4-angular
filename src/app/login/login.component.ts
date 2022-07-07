import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  isLoading = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      // On vérifie que la personne ne soit pas déja connectée (si c'est la cas le boolean d'affichage du login est a true)
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      (err) => {
        this.errorMessage = err.msg;
        this.isLoginFailed = true;
      }
    );
    this.isLoading = false;
  }
  reloadPage(): void {
    window.location.reload();
  }

  openSnackBar() {
    if (this.isLoggedIn) {
      let roleList:string ='';
      for (const role of this.roles){
        roleList += role + ' ';
      }
      this._snackBar.open('Vous êtes connectés en tant que '+roleList, "",  {
        duration: 1000
      });
    }
  }
}
