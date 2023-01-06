import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthDelyService } from './auth-dely.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  uid:any = localStorage.getItem('uid');
  constructor(private auth_dely: AuthDelyService ,private router:Router)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth_dely.isAuthorized)
      {
        return this.auth_dely.isAuthorized;
      } 
      else
      {
          this.router.navigate(['/cart'],{ queryParams: {uid :this.uid}})
        return this.auth_dely.isAuthorized
      }

  }
  
}
