import { TestBed, HttpTestingController } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, of } from 'rxjs';

import { ProduitsService } from './produits.service';
import { Produit } from '../modele/produit';

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

        it('Demande à la base de donnée de donner les produits', () => {
            angularFirestoreSpy.collection.and.returnValue({ snapshotChanges: () => of([]) });
            service.getAllProduits();
            expect(angularFirestoreSpy.collection).toHaveBeenCalledWith('/Produits');
        });
    });

    describe('Test d\'intégration', () => {
        let service: ProduitsService;
        let httpMock = HttpTestingController;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports : [AngularFireModule.initializeApp(environment.firebase),
                    HttpTestingController],
            });
            service = TestBed.inject(ProduitsService);
            httpMock = TestBed.inject(HttpTestingController);
        });

        it('Création ProduitsService avec dépendance', () => {
            expect(service).toBeTruthy();
        });

        //it('Récupère tous les produits', () => {
        //    const mockResponse = [ {
        //        id: "1", nom: "Produit1", titre: "thé fuité", url:"lambda", type: "tp", parfum: "fuité",
        //        pays: "france", prix:6, description:"description", suggestion:"sugg", qte: 0, qteStock:12
        //    }];
        //});
    });
});
