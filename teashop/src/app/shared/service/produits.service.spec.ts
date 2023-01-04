import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

import { ProduitsService } from './produits.service';

describe('ProduitsService', () => {
  describe('Test unitaire', () => {
      let service: ProduitsService;
      let angularFirestoreSpy: any;


      beforeEach(() => {
          const spyDB = jasmine.createSpyObj('AngularFirestore', ['collection']);
          TestBed.configureTestingModule({
              providers: [
                  ProduitsService,
                  {provide: AngularFirestore, useValue: spyDB}
              ]
          });
          service = TestBed.inject(ProduitsService);
          angularFirestoreSpy = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
      });

      it('Créée ProduitsService en indépendance', () => {
          expect(service).toBeTruthy();
      });

      it('Récupère la base de donnée', () => {
        expect(service.getDatabase()).toBe(angularFirestoreSpy);
      });

      it('Récupère tous les produits', () => {
        angularFirestoreSpy.collection.and.returnValue({ snapshotChanges: () => of([]) });
        service.getAllProduits();
        expect(angularFirestoreSpy.collection).toHaveBeenCalledWith('/Produits');
      });
  });

  describe('Test d\'intégration', () => {
      let service: ProduitsService;

      beforeEach(() => {
          TestBed.configureTestingModule({
              imports : [AngularFireModule.initializeApp(environment.firebase)],
          });
          service = TestBed.inject(ProduitsService);
      });

      it('Création ProduitsService avec dépendance', () => {
          expect(service).toBeTruthy();
      });
  });
});
class AngularFirestoreStub{}
