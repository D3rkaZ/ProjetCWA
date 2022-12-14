import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthValideService } from './auth-valide.service';

@Injectable({
  providedIn: 'root'
})
export class AuthValideGuard implements CanActivate {
  uid:any = localStorage.getItem('uid');
  constructor(private authVali : AuthValideService , private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authVali.isAuthorized)
      {
        return this.authVali.isAuthorized;
      }
      else
      {
        this.router.navigate(['/shop'],{ queryParams: {uid :this.uid}})
        return this.authVali.isAuthorized;
      }
  }
  
}
