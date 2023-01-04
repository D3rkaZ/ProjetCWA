import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { ProduitsService } from 'src/app/shared/service/produits.service';

import { RetireProduitComponent } from './retire-produit.component';

describe('RetireProduitComponent', () => {
  let component: RetireProduitComponent;
  let fixture: ComponentFixture<RetireProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetireProduitComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase)],
      providers: [
          {provide: ProduitsService, useClass: ProduitsServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetireProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
class ProduitsServiceStub{
    getAllProduits(): Observable<DocumentChangeAction<unknown>[]>{
        return of([]);
    }
}
