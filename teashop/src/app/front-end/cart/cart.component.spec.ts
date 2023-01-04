import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { UtilisateurService } from 'src/app/shared/service/utilisateur.service';
import { Router } from '@angular/router';
import { PanierService } from '../../shared/service/panier.service';
import { AuthDelyService } from '../../shared/authGuards/auth-dely.service';
import { ProduitsService } from '../../shared/service/produits.service';

import { CartComponent } from './cart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CartComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports : [AngularFireModule.initializeApp(environment.firebase)],
      providers: [
        {provide: UtilisateurService, useClass: UtilisateurServiceStub},
        {provide: Router, useClass: RouterStub},
        {provide: PanierService, useClass: PanierServiceStub},
        {provide: AuthDelyService, useClass: AuthDelyServiceStub},
        {provide: ProduitsService, useClass: ProduitsServiceStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class UtilisateurServiceStub{}
class RouterStub{}
class PanierServiceStub{}
class AuthDelyServiceStub{}
class ProduitsServiceStub{}