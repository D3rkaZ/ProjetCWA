import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Commande } from '../modele/commande';
import { panier } from '../modele/panier';
import { livraison } from '../modele/livraison';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor( private database:AngularFirestore) { }

  livraison:livraison = {nom:"",prenom :"" , adresse : "" , code_postal : "" , ville : "" , pays : "" , telephone : ""}
  nom:string = "";
  prenom:string ="";
  adress : string = "";
  code_postal : string = "";
  ville : string = "";
  pays :string ="";
  telephone :string = "";
  public commandeUtilisateur = new BehaviorSubject<Commande>({
    idCommande:"",emailUtilisateur:"",panier:[],addr_livraison:this.livraison,methode_paiement:""})

  createCommande(commande:Commande)
  {
    commande.idCommande = this.database.createId();
    this.database.collection('/Commandes').doc(commande.idCommande).set({
      idCommande : commande.idCommande,
      emailUtilisateur : commande.emailUtilisateur,
      panier : commande.panier,
      addr_livrasion : commande.addr_livraison,
      methode_paiement : commande.methode_paiement
    })
  }

  updateMethodPayment(commande:Commande,method:string)
  {
    this.database.collection('/Commandes').doc(commande.idCommande).update(
      {
        methode_paiement : method
      }
    )
  }

  envoieCommande(commande:Commande)
  {
    this.commandeUtilisateur.next(commande);
  }

}
