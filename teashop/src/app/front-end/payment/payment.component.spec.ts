import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthValideService } from 'src/app/shared/authGuards/auth-valide.service';
import { CommandeService } from 'src/app/shared/service/commande.service';
import { UtilisateurService } from 'src/app/shared/service/utilisateur.service';
import { Commande } from '../../shared/modele/commande';
import { BehaviorSubject } from 'rxjs';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      providers: [
        {provide: CommandeService, useClass: CommandeServiceStub},
        {provide: Router, useClass: RouterStub},
        {provide: AuthValideService, useClass: AuthValideServiceStub},
        {provide: UtilisateurService, useClass: UtilisateurServiceStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class CommandeServiceStub{
  public commandeUtilisateur = new BehaviorSubject<Commande>({
    idCommande:"",emailUtilisateur:"",panier:[],addr_livraison:
        {nom:"",prenom :"" , adresse : "" , code_postal : "" , ville : "" , pays : "" , telephone : ""}
    ,methode_paiement:""})
}
class RouterStub{}
class AuthValideServiceStub{}
class UtilisateurServiceStub{}
