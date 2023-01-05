import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../shared/service/utilisateur.service';
import { panierItem } from '../../shared/modele/panierItem';
import { panier } from '../../shared/modele/panier';
import { Produit } from '../../shared/modele/produit';
import { Router } from '@angular/router';
import { PanierService } from '../../shared/service/panier.service';
import { Utilisateur } from '../../shared/modele/utilisateur';
import { AuthDelyService } from '../../shared/authGuards/auth-dely.service';
import { ProduitsService } from '../../shared/service/produits.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  /* Initialise des attributs nécessaires */
  panier:panierItem[]=[];
  type:string = "Thé Vert";
  prixTotal:number = 0 ;
  utilisateur: Utilisateur ={id:"",nom:"" ,prenom :"" , email:"" ,mdp:"", date_naissance: "", role :"" , panier : []};  

  constructor(private uS:UtilisateurService , private router: Router , private panierSer:PanierService , private authDely:AuthDelyService,private pS:ProduitsService) {
    /* localStorage : une méthode stockage de données en local du côte cliente
    * email : email de l'utilisateur (par défaut : none)
    * token : token de connexion de l'utilisateur (True/False)
    */
    let email: any = localStorage.getItem("email");
    let isConnected:any = localStorage.getItem("token");

    if(isConnected=="true")
    {
      /* Recrute d'utilisateur par email */
      this.uS.getUtilisateurByEmail(email).then((doc)=>
      {
        /* Vérifie s'il existe un utilisateur lié à ce mail */
        if(doc.exists)
        {
          /* doc.data() envoie des données d'utilisateur */
          const user:any = doc.data();
          this.panier = user.panier;
          this.utilisateur= user
        }
        /* Calcule le prix total du panier */
        this.calculTotal();
        
      })
    }
  }
  /* La méthode permet de changer la quantité du produit dans panier*/
  changeQte(produit:any,event:any)
  {
    /* Crée des qteStock temporaires / rélles */
    let stock:number = produit.qteStock + produit.qteProduit;
    let stockTempo:number = stock - Number(event.target.value)
    let email:any = localStorage.getItem("email");
    if( stockTempo >=0)
    {
      produit.qteStock = stockTempo;
      /* l'appel la méthode updateQteStock dans ProduitService qui permet mise à jour la quantité stockée du produit*/
      this.pS.updateQteStock(produit,stockTempo);
      produit.qteProduit = Number(event.target.value);
      /* l'appel la méthode update qui permet mise à jour le panier dans la bdd Utilisateur */
      this.uS.getDoc(email).update(
        {
          panier: this.panier
        }
      )
    }
    else
    {
      alert('Le produit reste '+ stock +' produits !');
      produit.qteProduit=stock;
      event.target.value = stock;
    }
    /* Calcule le prix total du panier */
    this.calculTotal();
  }

  /* Calcule le prix total du panier */
  calculTotal()
  {
    this.prixTotal = 0; 
    for (let panierItem of this.panier)
    {
      this.prixTotal += panierItem.qteProduit * panierItem.prixProduit
    }
  }

  /* La méthode saveCommand qui sauvegarde le panier */
  saveCommand()
  {
    if(this.panier.length !=0)
    {
      let email:any = localStorage.getItem("email");
      this.uS.getDoc(email).update(
        {
          panier: this.panier
        }
      )
      this.panierSer.envoiePanier(this.panier); 
      this.uS.envoieUtilisateurObj(this.utilisateur);
      this.authDely.activeAuth();
      /* Va-y sur la route delyvery */
      this.router.navigate(['/dely']);
    }
    else
      alert("Votre panier est vide !")
  
  }
  /* Supprime d'un produit dans le panier */
  deletePanierItem(event:any)
  {
    /* update la nouvelle quantité de stockée  */
    let stock:number = this.panier[event].qteStock + this.panier[event].qteProduit;
    /* l'appel la méthode updateQteStock dans ProduitService qui permet de miser à jour la nouvelle stockée dans la bdd */
    this.pS.updateQteStock(this.panier[event],stock)
    this.panier.splice(event,1);
    let email:any = localStorage.getItem("email");
    /* l'appel la méthode update qui permet mise à jour le panier dans la bdd Utilisateur */
    this.uS.getDoc(email).update(
      {
        panier: this.panier
      }
    )
      /* Calcule le prix total du panier */
      this.calculTotal();
  }
  
  ngOnInit(): void {
  
  }

}
