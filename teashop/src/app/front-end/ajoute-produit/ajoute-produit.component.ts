import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../shared/service/produits.service';


@Component({
  selector: 'app-ajoute-produit',
  templateUrl: './ajoute-produit.component.html',
  styleUrls: ['./ajoute-produit.component.css']
})
export class AjouteProduitComponent implements OnInit {

  id : string= '';
  nom : string= '' ;
  titre : string= '';
  url : string= '';
  type : string= '';
  parfum : string= '';
  pays : string= '';
  prix : number= 0 ;
  description : string= '';
  suggestion : string= '';


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
    qteStock : 50
  }
  
  constructor(private pS:ProduitsService) { }

  addProduit()
  {
    if(this.titre=='' || this.nom=='' || this.url=='' || this.parfum=='' || this.pays=='' ||this.prix==0 || this.description=='')
    {
      alert('Fill all inpuit fields');
      return;
    }
    this.produitObjet.nom =this.nom;
    this.produitObjet.parfum=this.parfum;
    this.produitObjet.titre =this.titre;
    this.produitObjet.pays =this.pays;
    this.produitObjet.type =this.type;
    this.produitObjet.description =this.description;
    this.produitObjet.suggestion =this.suggestion;
    this.produitObjet.url =this.url;
    this.produitObjet.prix =this.prix;
    this.produitObjet.qte =0;
    this.pS.addProduits(this.produitObjet);
  
  }
  ngOnInit(): void {
  }

}
