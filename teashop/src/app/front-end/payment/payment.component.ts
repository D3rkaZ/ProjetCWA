import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/shared/modele/commande';
import { livraison } from 'src/app/shared/modele/livraison';
import { CommandeService } from '../../shared/service/commande.service';
import { Router } from '@angular/router';
import { AuthValideService } from '../../shared/authGuards/auth-valide.service';
import { panierItem } from '../../shared/modele/panierItem';
import { UtilisateurService } from '../../shared/service/utilisateur.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public method_visa:string= "block_none";
  public method_paypal:string = "block_none";
  public method_ecart:string = "block_none";

  livraison:livraison = {nom:"",prenom :"" , adresse : "" , code_postal : "" , ville : "" , pays : "" , telephone : ""}
  nom:string = "";
  prenom:string ="";
  adress : string = "";
  code_postal : string = "";
  ville : string = "";
  pays :string ="";
  telephone :string = "";
  methode_paiement : string= "";
  public commande:Commande ={
    idCommande :"",
    emailUtilisateur:"",
    panier : [],
    addr_livraison : this.livraison,
    methode_paiement : ""
  }
  adresse_livraison :string = ""
  nomUtilisateur : string = "";
  email:any = localStorage.getItem('email');
  prixTotal : number =0;
  changePaymentMethod_Visa()
  {
    if((this.method_visa=="block_none"&&this.method_paypal!="block_none")||(this.method_visa=="block_none"&&this.method_ecart!="block_none") )
    {
      this.method_visa= "method";
      this.method_paypal="block_none";
      this.method_ecart= "block_none";
    }
    else
      this.method_visa="method";
   
  }
  changePaymentMethod_Paypal()
  {
    if((this.method_paypal=="block_none"&&this.method_visa!="block_none")||(this.method_paypal=="block_none"&&this.method_ecart!="block_none") )
    {
      this.method_visa= "block_none";
      this.method_paypal="method paypal";
      this.method_ecart= "block_none";
    }
    else
      this.method_paypal="method paypal";
  }

  changePaymentMethod_Ecart()
  {
    if((this.method_ecart=="block_none"&&this.method_visa!="block_none")||(this.method_ecart=="block_none"&&this.method_paypal!="block_none") )
    {
      this.method_visa= "block_none";
      this.method_paypal="block_none";
      this.method_ecart= "method paypal";
    }
    else
      this.method_ecart="method paypal";
  }

  constructor(private cS:CommandeService, private router:Router, private authVali: AuthValideService, private uS:UtilisateurService) {
    this.cS.commandeUtilisateur.subscribe((data)=>
    {
      this.commande=data
      this.adresse_livraison = this.commande.addr_livraison.adresse + " " +this.commande.addr_livraison.code_postal + " " + this.commande.addr_livraison.ville + " " + this.commande.addr_livraison.pays
      this.nomUtilisateur=     this.commande.addr_livraison.nom + " " + this.commande.addr_livraison.prenom;
    })

   }

   validerCarte()
   {
      this.methode_paiement = "carte";
      this.commande.methode_paiement = this.methode_paiement;
      this.cS.createCommande(this.commande);
      this.cS.envoieCommande(this.commande);
      this.authVali.active();
      this.uS.getDoc(this.email).update(
        {
          panier :[]
        }
      )
      this.router.navigate(['/OK'])
      //this.cS.updateMethodPayment(this.commande,this.methode_paiement);
   }
   validerCadeau()
   {
    this.methode_paiement="carte cadeau";
    this.commande.methode_paiement = this.methode_paiement;
    this.cS.createCommande(this.commande);
    this.cS.envoieCommande(this.commande);
    this.authVali.active();
    this.uS.getDoc(this.email).update(
      {
        panier :[]
      }
    )
    this.router.navigate(['/OK']);
    //this.cS.updateMethodPayment(this.commande,this.methode_paiement);
   }
   validerPaypal()
   {
    this.methode_paiement ="paypal";
    this.commande.methode_paiement = this.methode_paiement;
    this.cS.createCommande(this.commande);
    this.cS.envoieCommande(this.commande);
    this.authVali.active();
    this.uS.getDoc(this.email).update(
      {
        panier :[]
      }
    )
  
    this.router.navigate(['/OK'])
    //this.cS.updateMethodPayment(this.commande,this.methode_paiement);
   }

   calculTotal()
   {
     this.prixTotal = 0; 
     for (let panierItem of this.commande.panier)
     {
       this.prixTotal += panierItem.qteProduit * panierItem.prixProduit
     }
   }

  ngOnInit(): void {
  }

}
