import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProduitsService } from '../../../shared/service/produits.service';
import { Produit } from '../../../shared/modele/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  produitObjet= {
    id : '',
    nom : '' ,
    titre : '',
    url : '',
    type : '',
    parfum : '',
    pays : '',
    prix :  0 ,
    description : '',
    suggestion : '',
    qte : 0
  }
  produits:Produit[]=[];
  constructor(private activeRoute: ActivatedRoute, private pS: ProduitsService) { }

  ngOnInit(): void {
    // this.activeRoute.paramMap.pipe(
    //   map((params:any) => params.get('id')),
    //   switchMap((async (id) => this.pS.getProduitById(id)))
    // ).subscribe(res =>
    //   {
    //     this.produit = res.map((e:any)=>
    //     {
    //       const data = e.payload.doc.data();
    //       data.id = e.payload.doc.id;
    //       return data;
    //     })
    //   })


    this.activeRoute.paramMap.subscribe(params =>
      {
        const id :any= params.get('id');
        console.log(id);
        this.pS.getProduitById(id).subscribe(res =>
          {
            this.produits = res.map((e:any)=>
            {
              const data = e.payload.doc.data();
              data.id = e.payload.doc.id;
              return data;
            })
            this.produitObjet = this.produits[0];
          })
      })
  }

}
