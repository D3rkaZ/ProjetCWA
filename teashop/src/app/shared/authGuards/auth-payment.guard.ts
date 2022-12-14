import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthPaymentService } from './auth-payment.service';

@Injectable({
  providedIn: 'root'
})
export class AuthPaymentGuard implements CanActivate {
  uid:any = localStorage.getItem('uid');
  constructor(private authpay:AuthPaymentService, private router:Router)
  {

  }

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authpay.isAuthorized)
      {
        return this.authpay.isAuthorized;
      }
      else
      {        
        this.router.navigate(['/cart'],{ queryParams: {uid :this.uid}});
        return this.authpay.isAuthorized;
      }
  }
  
}
