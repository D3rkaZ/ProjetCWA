import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  public isAuthorized = false;
  constructor() { }

  activeAuth()
  {
    this.isAuthorized=true;
  }
  deactive()
  {
    this.isAuthorized=false;
  }
}
