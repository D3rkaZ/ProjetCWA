import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { RecommendProduitComponent } from './recommend-produit.component';

describe('RecommendProduitComponent', () => {
  let component: RecommendProduitComponent;
  let fixture: ComponentFixture<RecommendProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendProduitComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase)]
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
