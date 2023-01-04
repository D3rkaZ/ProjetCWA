import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { UtilisateurService } from './utilisateur.service';

describe('UtilisateurService', () => {
  let service: UtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(UtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
