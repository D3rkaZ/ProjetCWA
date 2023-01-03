import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLoginService } from 'src/app/shared/service/auth-login.service';
import { UtilisateurService } from 'src/app/shared/service/utilisateur.service';

import { LoginComponent } from './login.component';
import { debug } from 'util';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let fauxUtilisateurService: any;
  let localStorage: any;

  beforeEach(async () => {
    localStorage = jasmine.createSpyObj('Storage', ['getItem']);
    (<jasmine.Spy>localStorage.getItem).and.returnValue('');
    fauxUtilisateurService = jasmine.createSpyObj('UtilisateurService', ['getUtilisateurByEmail']);
    (<jasmine.Spy>fauxUtilisateurService.getUtilisateurByEmail).and.returnValue(Promise.resolve());

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        {provide: AuthLoginService, useClass: AuthLoginServiceStub},
        {provide: UtilisateurService, useValue: fauxUtilisateurService},
        {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();

    debug;
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});

class AuthLoginServiceStub{}
class RouterStub{}
