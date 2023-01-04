import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { ProduitsService } from './produits.service';

describe('ProduitsService', () => {
  let service: ProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(ProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
