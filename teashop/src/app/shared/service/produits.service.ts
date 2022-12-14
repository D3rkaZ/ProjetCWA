import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Produit } from '../modele/produit';


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
      return this.database.collection('/Produits').snapshotChanges();
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
      if(nb==3)
      return this.database.collection('/Produits', ref => ref.where(keys[0], "==",values[0]).where(keys[1], "==",values[1]).where(keys[2], "==",values[2])).snapshotChanges();
      else if(nb==2)
      return this.database.collection('/Produits', ref => ref.where(keys[0], "==",values[0]).where(keys[1], "==",values[1])).snapshotChanges();
      else
      return this.database.collection('/Produits', ref => ref.where(keys[0], "==",values[0])).snapshotChanges();
    }
    //ajoute un produit
    addProduits(produit : Produit)
    {
      produit.id = this.database.createId();
      return this.database.collection('/Produits').add(produit);
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
            console.log("ok");
            console.log(doc.data());
          }
        }
      )
    }

    //delete produit
    deleteProduit(produit:Produit)
    {
      this.database.collection("/Produits").doc(produit.id).delete();
    }
}
