import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PanierService } from '../../../shared/service/panier.service';
import { ProduitsService } from '../../../shared/service/produits.service';
import { UtilisateurService } from '../../../shared/service/utilisateur.service';
import { panierItem } from '../../../shared/modele/panierItem';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { ProduitComponent } from './produit.component';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

describe('ProduitComponent', () => {
  let component: ProduitComponent;
  let fixture: ComponentFixture<ProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitComponent ],
      providers: [
        {provide: ProduitsService, useClass: ProduitsServiceStub},
        {provide: PanierService, useClass: PanierServiceStub},
        {provide: UtilisateurService, useClass: UtilisateurServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class ActivatedRouteStub{
    paramMap: Observable<ParamMap> = of();
}
class ProduitsServiceStub{
    getProduitById(): Observable<DocumentChangeAction<unknown>>{
        return of();
    }
}
class PanierServiceStub{
  public panierutilisateur = new BehaviorSubject<panierItem[]>([]);
}
class UtilisateurServiceStub{}
class RouterStub{}
