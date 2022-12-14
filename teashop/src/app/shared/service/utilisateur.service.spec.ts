import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { UtilisateurService } from './utilisateur.service';

describe('UtilisateurService', () => {
  let service: UtilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [AngularFireModule.initializeApp(environment.firebase)],
      providers: [
        {provide: AngularFirestore, useClass: AngularFirestoreStub},
        {provide: Router, useClass: RouterStub}
      ]
    });
    service = TestBed.inject(UtilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class AngularFirestoreStub{}
class RouterStub{}
