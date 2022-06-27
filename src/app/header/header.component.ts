import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  isDark!: boolean;

  constructor(private tokenStorageService: TokenStorageService ,@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2) {
   }
  ngOnInit(): void {

    this.isDark = window.sessionStorage.getItem('darkMode')=='true';


    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  changeMode(){

    this.isDark = !this.isDark;

    this.childToParent.emit(this.isDark);
  }


  @Output()
  childToParent = new EventEmitter<boolean>();



  }


