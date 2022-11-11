import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendProduitComponent } from './recommend-produit.component';

describe('RecommendProduitComponent', () => {
  let component: RecommendProduitComponent;
  let fixture: ComponentFixture<RecommendProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendProduitComponent ]
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
