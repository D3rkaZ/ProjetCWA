import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProduitsService } from '../../../shared/service/produits.service';
import { Produit } from '../../../shared/modele/produit';
import { EventEmitter } from 'stream';
import { PanierService } from '../../../shared/service/panier.service';
import { panierItem } from '../../../shared/modele/panierItem';
import { panier } from '../../../shared/modele/panier';
import { UtilisateurService } from '../../../shared/service/utilisateur.service';
import { Utilisateur } from 'src/app/shared/modele/utilisateur';

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
  typeProduit:string = "";

  public panier: panierItem[] = []; 
  constructor(private activeRoute: ActivatedRoute, private pS: ProduitsService , private panierSer:PanierService , private uS:UtilisateurService , private router:Router) {

    this.panierSer.panierutilisateur.subscribe((data:any)=>
    {
      this.panier =data;
      // console.log(this.panier);
    })
   }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params =>
      {
        const id :any= params.get('id');
        const type:any = params.get('type');
        this.typeProduit = type;
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

  minus_qty()
  {
    if(this.produitObjet.qte > 1)
    this.produitObjet.qte--;
  }

  plus_qty()
  {
    this.produitObjet.qte++;
  }

  recupTypeProduit(event:any)
  {
    console.log(event);
  }

  addPanier()
  {
    let token:any = localStorage.getItem("token");
    if (token== "true")
    {
      let panierItem: panierItem =
      {
        idProduit : this.produitObjet.id ,
        nomProduit : this.produitObjet.nom ,
        urlProduit : this.produitObjet.url ,
        prixProduit : this.produitObjet.prix ,
        qteProduit : this.produitObjet.qte 
      }
      let email:any = localStorage.getItem("email");
      let cdt:boolean = false ;
      for (let produit of this.panier)
        {
          if(produit.idProduit == panierItem.idProduit)
            {
              produit.qteProduit += panierItem.qteProduit;
              cdt =true;
            }
        }
          if(cdt == false)
            this.panier.push(panierItem);
          this.uS.getDoc(email).update(
            {
              panier: this.panier
            }
          )
          this.panierSer.envoiePanier(this.panier);
      this.produitObjet.qte = 1 ;
      alert("Ajoute " + this.produitObjet.nom + " dans votre panier !");
    }
    else
      this.router.navigate(['/login'])
  }
}
