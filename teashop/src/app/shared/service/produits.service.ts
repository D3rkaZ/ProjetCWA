import { Injectable } from '@angular/core';
import { GestionProduit } from '../modele/GestionProduit';
import { Produit } from '../modele/produit';
import { Produit_Interface } from '../modele/produit_interface';
import { Database } from 'sqlite3';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private  db:any = new Database('./projetCWA.db');
  private static fs = require('file-system');
  constructor()
  {}
  /* Créer un Instance singleton */
  // public static getInstance(): any
  // {
  //     if(this.db ==null)
  //     {
  //         this.db = new Database('./projetCWA.db');
  //     }
  //     return this.db;
  // }

  public static exec(dirname_file :string): void
  {
      // try{
      //     this.getInstance().exec(this.fs.readFileSync(dirname_file).toString());
      //     }
      // catch(error){console.error(error);}
  }

  public  fetch()
  {
      // return new Promise((resolve,reject)=>
      // {
      //     this.getInstance().all("Select * from Produits").then((rows: any) =>
      //         {
      //             let res:number = 0 ;
      //             console.log("Rows: ", JSON.stringify(rows));
      //             for(var row in rows)
      //             {
      //                 res += rows[row].id;
      //             }
      //             resolve(res);
      //         },
      //         (error:any) =>
      //         {
      //             console.log("SELECT ERROR", error);
      //             reject(error);
      //         }
      //         );
      // });

      return new Promise((resolve,reject)=>
      {
          let res :number =0;
          this.db.all("Select * from Produits",function(err:any,rows:any)
          {
              for(var row in rows)
              {
                  res += rows[row].id;
              }
          })   
          resolve(res);
      });
  }
 
  public executeSQL()
  {
      return new Promise((resolve)=>
      {
          let liste_produits:Produit[]=[];
         this.db.all('Select * from produits',(err:any,rows:any)=>
              {
                  for (var row in rows)
                  {
                      let p:Produit = new Produit(
                          rows[row].id,
                          rows[row].nom,
                          rows[row].titre,
                          rows[row].url,
                          rows[row].type,
                          rows[row].parfum,
                          rows[row].pays,
                          rows[row].prix,
                          rows[row].desciption,
                          rows[row].suggestion
                          );
                      liste_produits.push(p);
                  
                  }
                  resolve(liste_produits);
              }
              );
      });
  }

  public getAll()
  {
      return this.executeSQL().then(
          function(rows:any){
              return rows;
      }
      )
  }
}
