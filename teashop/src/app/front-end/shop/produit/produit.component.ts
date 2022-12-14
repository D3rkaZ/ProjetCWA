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
    qte : 0,
    qteStock :0,
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
      //this.totalPrix =0;
      let panierItem: panierItem =
      {
        idProduit : this.produitObjet.id ,
        nomProduit : this.produitObjet.nom ,
        urlProduit : this.produitObjet.url ,
        prixProduit : this.produitObjet.prix ,
        qteProduit : this.produitObjet.qte ,
        qteStock : this.produitObjet.qteStock
      }
      let email:any = localStorage.getItem("email");
      this.uS.getUtilisateurByEmail(email).then((doc) =>
        {
          if (doc.exists) {
            const data:any = doc.data();
            let cdt:boolean = false ;
            this.panier = data.panier;
            let stock:any = this.produitObjet.qteStock;
            if(panierItem.qteProduit <= this.produitObjet.qteStock)
            {
             console.log (panierItem.qteProduit);
             console.log (this.produitObjet.qteStock);

            for (let produit of this.panier)
            {
              if(produit.idProduit == panierItem.idProduit)
              {
                  produit.qteProduit += panierItem.qteProduit;
                  this.produitObjet.qteStock -=panierItem.qteProduit;
                  this.pS.updateQteStock(panierItem,this.produitObjet.qteStock);
                  panierItem.qteStock = this.produitObjet.qteStock
                  cdt =true;
              }
            }
            if(cdt == false)
            {
              this.panier.push(panierItem);
              this.produitObjet.qteStock -=panierItem.qteProduit
              this.pS.updateQteStock(panierItem,this.produitObjet.qteStock)
              panierItem.qteStock = this.produitObjet.qteStock
            }
              
            this.uS.getDoc(email).update(
              {
                panier: this.panier
              }
            )
            alert("Ajoute " + this.produitObjet.nom + " dans votre panier !");
            this.panierSer.envoiePanier(this.panier);
          }
          else
          {

            alert("Il nous reste " + stock + " produits !")
          }
        }
        }
        
      )
      this.produitObjet.qte = 1 ;
      // for(let panierItem of this.panier)
      // {
      //   this.totalPrix += panierItem.qteProduit * panierItem.prixProduit
      // }

    }
    else
      this.router.navigate(['/login'])
  }
}
