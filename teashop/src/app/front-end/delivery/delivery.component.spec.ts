import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { PanierService } from '../../shared/service/panier.service';
import { UtilisateurService } from 'src/app/shared/service/utilisateur.service';
import { Utilisateur } from '../../shared/modele/utilisateur';
import { CommandeService } from '../../shared/service/commande.service';
import { AuthPaymentService } from '../../shared/authGuards/auth-payment.service';

import { DeliveryComponent } from './delivery.component';
import { BehaviorSubject } from 'rxjs';
import { panierItem } from 'src/app/shared/modele/panierItem';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports : [AngularFireModule.initializeApp(environment.firebase)],
      providers: [
        {provide: UtilisateurService, useClass: UtilisateurServiceStub},
        {provide: PanierService, useClass: PanierServiceStub},
        {provide: CommandeService, useClass: CommandeServiceStub},
        {provide: Router, useClass: RouterStub},
        {provide: AuthPaymentService, useClass: AuthPaymentServiceStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class UtilisateurServiceStub{
    public utilisateurObj = new BehaviorSubject<Utilisateur>({id:"",nom:"" ,prenom :"" , email:"" ,mdp:"", date_naissance: "", role :"" , panier : []});
}
class CommandeServiceStub{}
class RouterStub{}
class AuthPaymentServiceStub{}
class PanierServiceStub{
    public panierutilisateur = new BehaviorSubject<panierItem[]>([]);
}
