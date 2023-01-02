import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLoginService } from 'src/app/shared/service/auth-login.service';
import { UtilisateurService } from 'src/app/shared/service/utilisateur.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        {provide:AuthLoginService, useClass: AuthLoginServiceStub},
        {provide:UtilisateurService, useClass: UtilisateurServiceStub},
        {provide:Router, useClass: RouterStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class AuthLoginServiceStub{}
class UtilisateurServiceStub{}
class RouterStub{}
