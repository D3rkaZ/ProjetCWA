import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from '../../shared/service/produits.service';
import { CommandeService } from '../../shared/service/commande.service';
import { Produit } from '../../shared/modele/produit';
import { __values } from 'tslib';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
 
  public class_row_filter:string = "Row_filter_display-none";
  public icon_plus = "bx bx-plus";
  public filter_parfum:string[]=["Nature","Fruité","Agruments","Floral","Fleurs","Menthe"];
  public filter_type:string[]=["Thé Noir", "Thé Vert" , "Thé Blanc", "Matcha","Infusion","Rooibos","OOlong","Maté"];
  public filter_pays:string[]=["Chine","Japon","Espagne","VietNam","France","Pays-Bas"];
  public option_trie:string[]=["Pertinence","Prix décroissant","Prix croissant"]
  paysFilter:string = "";
  typeFilter:string = "";
  parfumFilter:string = "";
  option:string ="";
  produitList:Produit[]=[];
  produitFilter:any = new Map<string,string>();
  nb_produits:number =0 ;
  nameUser:string="";

  constructor(private pS:ProduitsService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params:any) => {
      console.log(params);

      this.nameUser = params.name;
      console.log(this.nameUser); 
    })
    this.getAllProuit();

    
  }
  changeDisplay()
  {
    this.class_row_filter = this.class_row_filter == "Row_filter" ? "Row_filter_display-none" : "Row_filter";
    this.icon_plus = this.icon_plus == "bx bx-plus" ? "bx bx-x" : "bx bx-plus";
    console.log(this.class_row_filter);
  }

  ProduitsFilter()
  {
    this.produitFilter.set("type",this.typeFilter);
    this.produitFilter.set("parfum",this.parfumFilter);
    this.produitFilter.set("pays",this.paysFilter);
    let nb_attr:number = 0;
    let keys:string[]=[];
    let values:string[]=[];
    for(let value of this.produitFilter.values())
    {
      if(value != "") nb_attr +=1;
    }
    for(let value of this.produitFilter.values())
    {
      if(value!="")
      values.push(value);
  
    }
    for(let key of this.produitFilter.keys())
    {
      if(this.produitFilter.get(key)!="")
      keys.push(key);

    }
    this.pS.getProduitsFilter(this.produitFilter,nb_attr).subscribe(res =>
      {
        this.produitList = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
      });
    this.changeDisplay();
  }

  EffacerFilter()
  {
    this.paysFilter="";
    this.typeFilter="";
    this.parfumFilter="";
    this.getAllProuit();
    this.changeDisplay();
  }

  getAllProuit()
  {
    this.pS.getAllProduits().subscribe(res =>
      {
        this.produitList = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
      })
    console.log(this.produitList);
  }
  onChange(event:any)
  {
    if(event.target.value !== "Pertinence")
    this.pS.getProduitByPrix(event.target.value).subscribe(res =>
      {
        this.produitList = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        
      })
  }
  ngOnInit(): void {
  }

  
}
