import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { panierItem } from '../modele/panierItem';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public panierutilisateur = new BehaviorSubject<panierItem[]>([]);
  constructor(private database:AngularFirestore) { }
  getAllProduits()
  {
    return this.database.collection('/Paniers').snapshotChanges();
  }

  envoiePanier(panier : panierItem[])
  {
    this.panierutilisateur.next(panier);
  }
}
