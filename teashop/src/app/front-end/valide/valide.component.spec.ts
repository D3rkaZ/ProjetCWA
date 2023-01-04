import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { Commande } from 'src/app/shared/modele/commande';
import { BehaviorSubject } from 'rxjs';
import { CommandeService } from 'src/app/shared/service/commande.service';

import { ValideComponent } from './valide.component';

describe('ValideComponent', () => {
  let component: ValideComponent;
  let fixture: ComponentFixture<ValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValideComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase)],
      providers: [
        {provide: CommandeService, useClass: CommandeServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class CommandeServiceStub{
  public commandeUtilisateur = new BehaviorSubject<Commande>({
    idCommande:"",emailUtilisateur:"",panier:[],addr_livraison:{
        nom:"",prenom :"" , adresse : "" , code_postal : "" , ville : "" , pays : "" , telephone : ""
    },methode_paiement:""})
}
