import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../shared/service/panier.service';
import { panierItem } from '../../shared/modele/panierItem';
import { Utilisateur } from '../../shared/modele/utilisateur';
import { UtilisateurService } from '../../shared/service/utilisateur.service';
import { livraison } from 'src/app/shared/modele/livraison';
import { CommandeService } from '../../shared/service/commande.service';
import { Commande } from '../../shared/modele/commande';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthPaymentService } from '../../shared/authGuards/auth-payment.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  public panier : panierItem[]=[];
  public nbProduits : number = 0;
  public utilisateur: Utilisateur = {id:"",nom:"" ,prenom :"" , email:"" ,mdp:"", date_naissance: "", role :"" , panier : []};  
  livraison:livraison = {nom:"",prenom :"" , adresse : "" , code_postal : "" , ville : "" , pays : "" , telephone : ""}
  nom:string = "";
  prenom:string ="";
  adress : string = "";
  code_postal : string = "";
  ville : string = "";
  pays :string ="";
  telephone :string = "";
  prixTotal:number =0;
  public commande:Commande ={
    idCommande :"",
    emailUtilisateur:"",
    panier : [],
    addr_livraison : this.livraison,
    methode_paiement : ""
  }
  constructor(private panierSer :PanierService , private uS:UtilisateurService, private cS : CommandeService , private router:Router , private authPay:AuthPaymentService) {
    this.panierSer.panierutilisateur.subscribe((data:any)=>
    {
      this.panier =data;
    })

    for (let produit of this.panier)
    {
      let qte:any = produit.qteProduit
      this.nbProduits += Number(qte);
    }

    this.uS.utilisateurObj.subscribe((data:any)=>
    {
      this.utilisateur = data;
      console.log(this.utilisateur)
      this.nom = this.utilisateur.nom;
      this.prenom = this.utilisateur.prenom;
    }
    )
    this.calculTotal()
   }

   validerCommande()
   {
    this.livraison.nom = this.nom;
    this.livraison.prenom = this.prenom;
    this.livraison.telephone = this.telephone;
    this.livraison.code_postal = this.code_postal;
    this.livraison.adresse = this.adress;
    this.livraison.pays = this.pays;
    this.livraison.ville = this.ville;

    console.log(this.livraison);
    this.commande.emailUtilisateur = this.utilisateur.email,
    this.commande.panier = this.panier ,
    this.commande.addr_livraison = this.livraison,
    
    //this.cS.createCommande(this.commande);

    this.cS.envoieCommande(this.commande);
    alert("Enregistrement votre commande !");
    this.authPay.activeAuth();
    this.router.navigate(['/pay']);
   }
   calculTotal()
   {
     this.prixTotal = 0; 
     for (let panierItem of this.panier)
     {
       this.prixTotal += panierItem.qteProduit * panierItem.prixProduit
     }
   }

  ngOnInit(): void {
    // this.panierSer.panierutilisateur.subscribe((data:any)=>
    // {
    //   this.panier =data;
    //   console.log(this.panier);
    // })
  }

}
