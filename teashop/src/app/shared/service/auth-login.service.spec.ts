import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { AuthLoginService } from './auth-login.service';
import { UtilisateurService } from './utilisateur.service';

describe('AuthLoginService', () => {
  let service: AuthLoginService;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports : [AngularFireModule.initializeApp(environment.firebase)],
        providers: [
          {provide: UtilisateurService, useClass: UtilisateurServiceStub},
          {provide: AngularFireAuth, useClass: AngularFireAuthStub},
          {provide: Router, useClass: RouterStub},
        ]
      });
    TestBed.configureTestingModule({
      
    });
    service = TestBed.inject(AuthLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class UtilisateurServiceStub{}
class AngularFireAuthStub{}
class RouterStub{}
