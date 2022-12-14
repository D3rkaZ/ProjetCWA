import { Component, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/shared/modele/produit';
import { ProduitsService } from '../../shared/service/produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommend-produit',
  templateUrl: './recommend-produit.component.html',
  styleUrls: ['./recommend-produit.component.css']
})
export class RecommendProduitComponent implements OnInit {

  @Input() typeproduit:string="";
  produitList:Produit[] = [];
  constructor(private pS:ProduitsService, private router:Router) {
  
   }

  
  ngOnInit(): void {
    this.pS.getProduitByType(this.typeproduit).subscribe(res =>
      {
        this.produitList = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
      });
  }

  goToProduit(event:any)
  {
    var url:string = "/produit/"+event.id+"/"+event.type;
    this.router.navigate([url])
  }
}
