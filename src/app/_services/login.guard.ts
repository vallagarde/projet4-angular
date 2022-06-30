import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private tokenService: TokenStorageService, private router:Router){

  }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      let user:any = this.tokenService.getUser();
      console.log(user);

      if (!user.roles){
        return true;
      }else if (user.roles[0]=='ROLE_ADMIN'){
        this.router.navigate(['/admin']);
        return false;
      }else if (user.roles[0]=='ROLE_MODERATOR'){
        this.router.navigate(['/mod']);
        return false;
      }else {
        this.router.navigate(['/user']);
        return false;
      }



  }

}
