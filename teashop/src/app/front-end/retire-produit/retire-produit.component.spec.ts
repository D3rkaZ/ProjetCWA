import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { RetireProduitComponent } from './retire-produit.component';

describe('RetireProduitComponent', () => {
  let component: RetireProduitComponent;
  let fixture: ComponentFixture<RetireProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetireProduitComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase)]
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
