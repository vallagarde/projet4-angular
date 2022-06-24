import { Component, EventEmitter, HostBinding, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from './utils/validation'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class') className = '';


  isDark =false;

  title= "pecadille";
  /**
 * Initialisation du controle de formulaire pour authentification
 */
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
/**
 * Initialisation du controle de formulaire pour authentification
 */
/**
 * Initialisation de l'authentification
 */
  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

/**
 * Initialisation de l'authentification
 */



  constructor(private tokenStorageService: TokenStorageService, private formBuilder: FormBuilder,@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2) { } /// l'import d document et du renderer2 permettent d'avoir ccès a la balise body dans l'index.html
  ngOnInit(): void {


    if (window.sessionStorage.getItem('darkMode')=='true'){
      this.renderer.addClass(this.document.body, "my-dark-theme");
    }else{
      this.renderer.removeClass(this.document.body, "my-dark-theme");

    }



    /**
    * Chargement des informations pour valider le formulaire de connexion ou de sign-up
    */

    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );

    /**
    * Chargement des informations pour valider le formulaire de connexion ou de sign-up
    */
    /**
    * Chargement des informations de login / de la présence de Token dans la session
    */
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
    /**
    * Chargement des informations de login / de la présence de Token dans la session
    */
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  @Output()
  childToParent = new EventEmitter<boolean>();

  changeDark(isDark: boolean){

    if (this.isDark){
      window.sessionStorage.setItem('darkMode', 'true');
      this.renderer.addClass(this.document.body, "my-dark-theme");
    }else{
      window.sessionStorage.setItem('darkMode', '');
      this.renderer.removeClass(this.document.body, "my-dark-theme");

    }

    this.childToParent.emit(isDark)


    this.isDark=isDark;


  }
}
