import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { panierItem } from '../modele/panierItem';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  /* Crée un BehaviorSujet panierItem */
  public panierutilisateur = new BehaviorSubject<panierItem[]>([]);
  constructor(private database:AngularFirestore) { }
  /* Récupèrer des produits dans un panier */
  getAllProduits()
  {
    return this.database.collection('/Paniers').snapshotChanges();
  }

  /* Envoie des données d'un panier entre 2 component au même niveau */
  envoiePanier(panier : panierItem[])
  {
    this.panierutilisateur.next(panier);
  }
}
