import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteProduitComponent } from './ajoute-produit.component';

describe('AjouteProduitComponent', () => {
  let component: AjouteProduitComponent;
  let fixture: ComponentFixture<AjouteProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
