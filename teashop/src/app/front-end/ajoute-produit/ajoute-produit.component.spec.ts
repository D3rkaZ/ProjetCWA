import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AjouteProduitComponent } from './ajoute-produit.component';

describe('AjouteProduitComponent', () => {
  let component: AjouteProduitComponent;
  let fixture: ComponentFixture<AjouteProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteProduitComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase)]
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
