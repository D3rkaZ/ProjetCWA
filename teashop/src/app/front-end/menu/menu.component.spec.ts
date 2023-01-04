import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthLoginService } from '../../shared/service/auth-login.service';
import { UtilisateurService } from '../../shared/service/utilisateur.service';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  //let fauxUtilisateurService: any;
  // let localStorage;

  beforeEach(async () => {
    //  localStorage = {};

    //  spyOn(window.localStorage, 'getItem').and.callFake((key) =>
    //    key in localStorage ? localStorage[key] : null
    // );
    //fauxUtilisateurService = jasmine.createSpyObj('UtilisateurService', ['getUtilisateurByEmail']);
    //(<jasmine.Spy>fauxUtilisateurService.getUtilisateurByEmail).and.callFake(() => Promise.resolve());
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports : [AngularFireModule.initializeApp(environment.firebase)],
      providers:[
        {provide: AuthLoginService, useClass: AuthLoginServiceStub},
        {provide: UtilisateurService, useClass: UtilisateurServiceStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class AuthLoginServiceStub{}
class UtilisateurServiceStub{ }
