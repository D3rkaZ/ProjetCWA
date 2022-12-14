import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthPaymentService } from './auth-payment.service';

@Injectable({
  providedIn: 'root'
})
export class AuthPaymentGuard implements CanActivate {
  constructor(private authpay:AuthPaymentService)
  {

  }

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authpay.isAuthorized;
  }
  
}
