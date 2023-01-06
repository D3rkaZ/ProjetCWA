import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Produit } from '../modele/produit';
import { panierItem } from '../modele/panierItem';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  constructor(private database:AngularFirestore)
  {}
    //getCollection 
    getDatabase()
    {
      return this.database;
    }
    //get all produits
    getAllProduits()
    {
      return this.database.collection<Produit>('/Produits').snapshotChanges();
    }
    //get Produit by price ASC
    getProduitByPrix(s:string)
    {
      if(s==="Prix croissant")
      return this.database.collection('/Produits', ref => ref.orderBy("prix","asc")).snapshotChanges();
      else
      return this.database.collection('/Produits', ref => ref.orderBy("prix","desc")).snapshotChanges();
    }
    //get produits filter
    getProduitsFilter(map:any,nb:number)
    {
      /* map contient une liste des options filtrages */
     let keys:string[]=[];
     let values:string[]=[];
     for(let value of map.values())
     {
      if(value!="")
        values.push(value);
     }
     for(let key of map.keys())
     {
      if(map.get(key)!="")
        keys.push(key);
     }
     /* dans ce cas on fait le filter avec 3 options (coleur , type , pays) */
      if(nb==3)
      return this.database.collection('/Produits', ref => ref.where(keys[0], "==",values[0]).where(keys[1], "==",values[1]).where(keys[2], "==",values[2])).snapshotChanges();
      else if(nb==2)
      /* dans ce cas on fait le filter avec 2 options (coleur , type) ou (coleur , pays) */
      return this.database.collection('/Produits', ref => ref.where(keys[0], "==",values[0]).where(keys[1], "==",values[1])).snapshotChanges();
      else
      /* dans ce cas on fait le filter avec 1 options (coleur) ou (pays) ou (type) */
      return this.database.collection('/Produits', ref => ref.where(keys[0], "==",values[0])).snapshotChanges();
    }
    //ajoute un produit
    addProduits(produit : Produit)
    {
      produit.id = this.database.createId();
      return this.database.collection('/Produits').doc(produit.id).set(
        {
          id : produit.id,
          nom : produit.nom,
          titre : produit.titre,
          description : produit.description,
          url : produit.url,
          parfum : produit.parfum ,
          qte : produit.qte,
          prix : produit.prix,
          suggestion : "",
          type: produit.type,
          pays : produit.pays,
          qteStock : produit.qteStock
        }
      );
    }

    //get produit by id
    getProduitById(id:string)
    {
      return this.database.collection('/Produits', ref => ref.where('id', "==",id)).snapshotChanges();
    }

    //get produit by type
    getProduitByType(type:string)
    {
      return this.database.collection('/Produits', ref => ref.where('type', "==",type)).snapshotChanges();
    }

    //get produit by id
    getById()
    {
      return this.database.collection('/Produits').doc("1").ref.get().then(
        (doc)=>{
          if (doc.exists) {
          }
        }
      )
    }

    //update qteStock

    updateQteStock(produit:panierItem, qteStock:number)
    {
      return this.database.collection('/Produits').doc(produit.idProduit).update(
        {
          qteStock : qteStock
        }
      )
    }

    update_QteStock(produit:Produit, qteStock:number)
    {
      return this.database.collection('/Produits').doc(produit.id).update(
        {
          qteStock : qteStock
        }
      )
    }
    //delete produit
    deleteProduit(produit:Produit)
    {
      this.database.collection("/Produits").doc(produit.id).delete();
    }
}
