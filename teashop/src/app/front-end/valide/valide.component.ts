import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/shared/modele/commande';
import { livraison } from 'src/app/shared/modele/livraison';
import { CommandeService } from '../../shared/service/commande.service';

@Component({
  selector: 'app-valide',
  templateUrl: './valide.component.html',
  styleUrls: ['./valide.component.css']
})
export class ValideComponent implements OnInit {

  /* Initialise un objet livraison et commande */
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
  constructor(private cS:CommandeService) { 

    /* Récupèrer la commande au component ShopComponent */
    this.cS.commandeUtilisateur.subscribe((data)=>
    {
      this.commande = data
    })
  }

  ngOnInit(): void {
  }

}
