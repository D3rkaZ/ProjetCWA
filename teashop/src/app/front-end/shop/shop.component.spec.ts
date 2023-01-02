import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AuthAdminService } from 'src/app/shared/authGuards/auth-admin.service';
import { PanierService } from 'src/app/shared/service/panier.service';
import { ProduitsService } from 'src/app/shared/service/produits.service';
import { UtilisateurService } from 'src/app/shared/service/utilisateur.service';

import { ShopComponent } from './shop.component';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopComponent ],
      providers: [
        {provide: ProduitsService, useClass: ProduitsServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useClass: RouterStub},
        {provide: PanierService, useClass: PanierServiceStub},
        {provide: UtilisateurService, useClass: UtilisateurServiceStub},
        {provide: AuthAdminService, useClass: AuthAdminServiceStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class ProduitsServiceStub{}
class ActivatedRouteStub{}
class RouterStub{}
class PanierServiceStub{}
class UtilisateurServiceStub{
}
class AuthAdminServiceStub{}
