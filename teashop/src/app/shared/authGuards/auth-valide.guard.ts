import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthValideService } from './auth-valide.service';

@Injectable({
  providedIn: 'root'
})
export class AuthValideGuard implements CanActivate {
  constructor(private authVali : AuthValideService)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authVali.isAuthorized;
  }
  
}
