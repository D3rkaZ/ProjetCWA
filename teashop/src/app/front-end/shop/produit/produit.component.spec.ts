import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { ProduitComponent } from './produit.component';
import { Component } from '@angular/core';

describe('ProduitComponent', () => {
  let component: ProduitComponent;
  let fixture: ComponentFixture<ProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProduitComponent,
        MockNavComponent
      ],
      imports : [AngularFireModule.initializeApp(environment.firebase), RouterTestingModule]
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

@Component({
  selector: 'app-menu',
  template: ''
})
class MockNavComponent{}