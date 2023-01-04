import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { AuthLoginService } from 'src/app/shared/service/auth-login.service';
import { environment } from 'src/environments/environment';
import { UtilisateurService } from 'src/app/shared/service/utilisateur.service';

import { LoginComponent } from './login.component';

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
      imports : [AngularFireModule.initializeApp(environment.firebase)],
      providers:[
        {provide: AuthLoginService, useClass: AuthLoginServiceStub},
        {provide: UtilisateurService, useValue: fauxUtilisateurService},
        {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();

    //authService = TestBed.inject(AuthLoginService);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
     expect(component).toBeTruthy();
  });

  it('connexion reussis ?', () => {
    // component.email = "toto@gmail.com";
    // component.mdp = "totoestla";
    // console.log(`component email = ${component.email}`)
    // fixture.detectChanges();
    // spyOn(authService, 'login').and.callThrough();
    // component.login();
    // expect(authService.login).toHaveBeenCalledWith('toto@gmail.com', 'totoestla');
  });

});

class AuthLoginServiceStub{}
class RouterStub{}
