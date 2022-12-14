import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthDelyService {
  public isAuthorized =false;
  constructor() { }


  activeAuth()
  {
    this.isAuthorized = true;
  }

  deactiveAuth()
  {
    this.isAuthorized = false;
  }
}
