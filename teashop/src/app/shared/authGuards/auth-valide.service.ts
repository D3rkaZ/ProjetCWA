import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthValideService {
  public isAuthorized = false
  constructor() { }
  active()
  {
    this.isAuthorized =true;
  }
  deactive()
  {
    this.isAuthorized = false;
  }
}
