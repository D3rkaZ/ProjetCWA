import { ComponentFixture, TestBed } from '@angular/core/testing';
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
