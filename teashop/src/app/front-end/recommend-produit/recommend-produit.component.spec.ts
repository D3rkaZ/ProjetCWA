import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Router } from 'express';
import { of, Observable } from 'rxjs';
import { ProduitsService } from 'src/app/shared/service/produits.service';

import { RecommendProduitComponent } from './recommend-produit.component';

describe('RecommendProduitComponent', () => {
  let component: RecommendProduitComponent;
  let fixture: ComponentFixture<RecommendProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendProduitComponent ],
      providers: [
          {provide: ProduitsService, useClass: ProduitsServiceStub},
          {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class ProduitsServiceStub{
    /*
    getProduitByType(t:string): Observable<DocumentChangeAction<unknown>>{
        return of();
    }
    */
}
class RouterStub{}
