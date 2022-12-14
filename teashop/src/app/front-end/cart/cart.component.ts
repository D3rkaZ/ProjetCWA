import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../shared/service/utilisateur.service';
import { panierItem } from '../../shared/modele/panierItem';
import { panier } from '../../shared/modele/panier';
import { Produit } from '../../shared/modele/produit';
import { Router } from '@angular/router';
import { PanierService } from '../../shared/service/panier.service';
import { Utilisateur } from '../../shared/modele/utilisateur';
import { AuthDelyService } from '../../shared/authGuards/auth-dely.service';

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
  constructor(private uS:UtilisateurService , private router: Router , private panierSer:PanierService , private authDely:AuthDelyService) {
    let email: any = localStorage.getItem("email");
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
  
  changeQte(produit:any,event:any)
  {
    produit.qteProduit = event.target.value;
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
  
  ngOnInit(): void {
  
  }

}
