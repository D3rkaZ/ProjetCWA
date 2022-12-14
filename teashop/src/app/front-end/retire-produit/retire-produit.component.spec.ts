import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetireProduitComponent } from './retire-produit.component';

describe('RetireProduitComponent', () => {
  let component: RetireProduitComponent;
  let fixture: ComponentFixture<RetireProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetireProduitComponent ]
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
