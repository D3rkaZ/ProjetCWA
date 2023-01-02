import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLoginService } from '../../shared/service/auth-login.service';
import { UtilisateurService } from '../../shared/service/utilisateur.service';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
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
