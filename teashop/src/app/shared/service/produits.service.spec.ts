import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

import { ProduitsService } from './produits.service';
import { Produit } from '../modele/produit';

describe('ProduitsService', () => {
    let service: ProduitsService;
    let angularFirestoreSpy: any;
    let fsCollection: any;
    let helper: Helper;

    beforeEach(() => {
        helper = new Helper();
        angularFirestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection']);
        fsCollection = jasmine.createSpyObj('collection', ['snapshotChanges']);
        angularFirestoreSpy.collection.and.returnValue(fsCollection);
        fsCollection.snapshotChanges.and.returnValue(of([]));

        TestBed.configureTestingModule({
            providers: [
                ProduitsService,
                {provide: AngularFirestore, useValue: angularFirestoreSpy}
            ]
        });
        service = TestBed.inject(ProduitsService);
        angularFirestoreSpy = TestBed.inject(AngularFirestore);
    });

    describe('Test unitaire', () => {
        it('Créée ProduitsService en indépendance', () => {
            expect(service).toBeTruthy();
        });

        it('Récupère la base de donnée', () => {
            expect(service.getDatabase()).toBe(angularFirestoreSpy);
        });

        describe('getAllProduits', () => {
            describe('Appel Méthode', () => {
                beforeEach( () => {
                    service.getAllProduits();
                });
                it('Collection 1 fois avec AngularFirestore', () => {
                    expect(angularFirestoreSpy.collection).toHaveBeenCalledTimes(1);
                });
                it('SnapshotChanges 1 fois avec AngularFirestore', () => {
                    expect(fsCollection.snapshotChanges).toHaveBeenCalledTimes(1);
                });
                it('Collection avec le paramètre /Produits', () => {
                    expect(angularFirestoreSpy.collection).toHaveBeenCalledWith('/Produits');
                });
            });

            describe('Retour méthode getAllProduits', () => {

                it('Aucun produit', () => {
                    service.getAllProduits().subscribe(produit => {
                        expect(produit.length).toBe(0);
                    });
                });

                it('Un produit', () => {
                    fsCollection.snapshotChanges.and.returnValue(helper.getActions(1));
                    service.getAllProduits().subscribe(produit => {
                        expect(produit.length).toBe(1);
                    });
                });

                it('10 produit', () => {
                    fsCollection.snapshotChanges.and.returnValue(helper.getActions(10));
                    service.getAllProduits().subscribe(produit => {
                        expect(produit.length).toBe(10);
                    });
                });
            });
        });

        describe('getProduitByPrix', () => {
            describe('Appel Méthode', () => {
                let testCase:string[] = ['', 'Prix croissant', 'décroissant', 'autre'] // Les différents arguments à tester
                for(let test in testCase){
                    describe('Argument ' + test, () => {
                        beforeEach( () => {
                            service.getProduitByPrix(test);
                        });
                        it('Collection 1 fois', () => {
                            expect(angularFirestoreSpy.collection).toHaveBeenCalledTimes(1);
                        });
                        it('SnapshotChanges 1 fois ', () => {
                            expect(fsCollection.snapshotChanges).toHaveBeenCalledTimes(1);
                        });
                    });
                }
            });
        });
    });

    describe('Test d\'intégration', () => {
        it('Appel getAllProduits avec un produits renvoie un produit avec les bons attributs', () => {
            fsCollection.snapshotChanges.and.returnValue(helper.getActions(1));
            service.getAllProduits().subscribe(res => {
                const produits = res.map( (e:any) => {
                    const data:Produit = e.payload.doc.data() as Produit;
                    data.id = e.payload.doc.id;
                    return data;
                });
                expect(produits[0]).toEqual({
                    id: "abc0",
                    nom: "Produit0",
                    titre: "the fruite",
                    url:"lambda0",
                    type: "tp",
                    parfum: "fruite",
                    pays: "france",
                    prix:6,
                    description:"description",
                    suggestion:"sugg",
                    qte: 0,
                    qteStock:12
                });
            });
        });
    });
});


class Helper{
    actions: any[] = [];

    // Créée les données et les renvoie
    getActions(amount: number): Observable<any[]>{
        for(let i = 0; i < amount; i++){
            const produit: Produit = {
                id: '',
                nom: "Produit" + i,
                titre: "the fruite",
                url:"lambda" + i,
                type: "tp",
                parfum: "fruite",
                pays: "france",
                prix:6,
                description:"description",
                suggestion:"sugg",
                qte: 0,
                qteStock:12
            };
            this.actions.push({
                payload: {
                    doc: {
                        id: 'abc' + i,
                        data: () => {
                            return produit;
                        }
                    }
                }
            });
        }
        return of(this.actions);
    }
}
//    describe('Test d\'intégration', () => {
//        let service: ProduitsService;
//
//        beforeEach(() => {
//            TestBed.configureTestingModule({
//                imports : [AngularFireModule.initializeApp(environment.firebase)]
//            });
//            service = TestBed.inject(ProduitsService);
//        });
//
//        it('Création ProduitsService avec dépendance', () => {
//            expect(service).toBeTruthy();
//        });
//
//        //it('Récupère tous les produits', () => {
//        //    const mockResponse = [ {
//        //    }];
//        //});
//    });
//});
