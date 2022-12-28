import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../shared/service/produits.service';
import { Produit } from 'src/app/shared/modele/produit';
import { AuthValideGuard } from '../../shared/authGuards/auth-valide.guard';

@Component({
  selector: 'app-retire-produit',
  templateUrl: './retire-produit.component.html',
  styleUrls: ['./retire-produit.component.css']
})
export class RetireProduitComponent implements OnInit {

  public produitList: Produit[] = [];
  constructor(private pS:ProduitsService) {

    this.pS.getAllProduits().subscribe(res =>
      {
        this.produitList = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
      })
    }


  deleteProduit(event:any)
  {
    this.pS.deleteProduit(event);
  }
  updateQteStock(produit:any,event:any)
  {
    this.pS.update_QteStock(produit,event.target.value)
  }
  ngOnInit():void {
  }

}

