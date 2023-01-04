import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ProduitsService } from 'src/app/shared/service/produits.service';

import { AjouteProduitComponent } from './ajoute-produit.component';
import { Component } from '@angular/core';

describe('AjouteProduitComponent', () => {
  let component: AjouteProduitComponent;
  let fixture: ComponentFixture<AjouteProduitComponent>;
  let fauxProduitsService: any;

  beforeEach(async () => {
    // On donne à fauxProduitsService une méthode addProduit
    fauxProduitsService = jasmine.createSpyObj('ProduitsService', ['addProduit']);
    // L'appelle de cette méthode renvoie une promesse résolue (tout c'est bien passé)
    (<jasmine.Spy>fauxProduitsService.addProduit).and.returnValue(Promise.resolve());

    await TestBed.configureTestingModule({
      declarations: [ AjouteProduitComponent, MockMenuComponent],
      imports : [AngularFireModule.initializeApp(environment.firebase)],
      providers: [
          {provide: ProduitsService, useValue: fauxProduitsService}
      ]
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

@Component({
  selector: 'app-menu',
  templateUrl: '',
})
@Component({
  selector: 'app-footer',
  templateUrl: '',
})
class MockMenuComponent{}
