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
  panier:panierItem[]=[];
  type:string = "Thé Vert";
  prixTotal:number = 0 ;
  utilisateur: Utilisateur ={id:"",nom:"" ,prenom :"" , email:"" ,mdp:"", date_naissance: "", role :"" , panier : []};  
  constructor(private uS:UtilisateurService , private router: Router , private panierSer:PanierService , private authDely:AuthDelyService,private pS:ProduitsService) {
    let email: any = localStorage.getItem("email");
    let isConnected:any = localStorage.getItem("token");
    if(isConnected=="true")
    {
      this.uS.getUtilisateurByEmail(email).then((doc)=>
      {
        if(doc.exists)
        {
          const user:any = doc.data();
          this.panier = user.panier;
          this.utilisateur= user
        }
        this.calculTotal();
        
      })
    }
  }
  
  changeQte(produit:any,event:any)
  {
    let stock:number = produit.qteStock + produit.qteProduit;
    console.log("stock : " + stock)
    let stockTempo:number = stock - Number(event.target.value)
    console.log("stockTempo : " + stockTempo)
    let email:any = localStorage.getItem("email");
    if( stockTempo >=0)
    {
      produit.qteStock = stockTempo;
      this.pS.updateQteStock(produit,stockTempo);
      produit.qteProduit = Number(event.target.value);
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
    this.calculTotal();
  }

  calculTotal()
  {
    this.prixTotal = 0; 
    for (let panierItem of this.panier)
    {
      this.prixTotal += panierItem.qteProduit * panierItem.prixProduit
    }
  }

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
      console.log(this.panier);
      this.panierSer.envoiePanier(this.panier); 
      this.uS.envoieUtilisateurObj(this.utilisateur);
      this.authDely.activeAuth();
      this.router.navigate(['/dely']);
    }
    else
      alert("Votre panier est vide !")
  
  }
  deletePanierItem(event:any)
  {
    let stock:number = this.panier[event].qteStock + this.panier[event].qteProduit;
    console.log(stock);
    this.pS.updateQteStock(this.panier[event],stock)
    this.panier.splice(event,1);
    let email:any = localStorage.getItem("email");
    this.uS.getDoc(email).update(
      {
        panier: this.panier
      }
    )
      this.calculTotal();
  }
  
  ngOnInit(): void {
  
  }

}
