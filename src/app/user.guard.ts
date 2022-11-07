import { TokenService } from './services/token.service';
import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService, private tokenService: TokenService) { }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   return this.userService.getIsUserValidated();
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.tokenService.getToken()){
        this.router.navigate(['/']);
        return false;
      }
    return true;
  }

}
