import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { PanierService } from './panier.service';

describe('PanierService', () => {
  let service: PanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(PanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
