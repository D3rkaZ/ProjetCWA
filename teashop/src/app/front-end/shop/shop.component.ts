import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from '../../shared/service/produits.service';
import { CommandeService } from '../../shared/service/commande.service';
import { Produit } from '../../shared/modele/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from 'src/app/shared/service/panier.service';
import { panierItem } from '../../shared/modele/panierItem';
import { UtilisateurService } from '../../shared/service/utilisateur.service';
import { Utilisateur } from 'src/app/shared/modele/utilisateur';
import { panier } from '../../shared/modele/panier';
import { AuthAdminService } from '../../shared/authGuards/auth-admin.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
 
  public class_row_filter:string = "Row_filter_display-none";
  public icon_plus = "bx bx-plus";
  public filter_parfum:string[]=["Nature","Fruité","Agruments","Floral","Fleurs","Menthe"];
  public filter_type:string[]=["Thé Noir", "Thé Vert" , "Thé Blanc", "Matcha","Infusion","Rooibos","OOlong","Maté"];
  public filter_pays:string[]=["Chine","Japon","Espagne","VietNam","France","Pays-Bas"];
  public option_trie:string[]=["Pertinence","Prix décroissant","Prix croissant"]
  paysFilter:string = "";
  typeFilter:string = "";
  parfumFilter:string = "";
  option:string ="";
  produitList:Produit[]=[];
  produitFilter:any = new Map<string,string>();
  nb_produits:number =0 ;
  nameUser:string="";


  //Test panier 
  panier : panierItem[]=[];
  totalPrix : number =0;
  isConnected:any="";
  test:any[]=[];

  utilisateur:Utilisateur = {
    id:'',
    nom:'Mon compte',
    prenom:'',
    email:'',
    mdp:'',
    date_naissance:'',
    role:'',
    panier: [],
  }
  u:Utilisateur[] = [];


  constructor(private pS:ProduitsService, private route: ActivatedRoute, private router:Router,private paniS:PanierService,private uS:UtilisateurService,private authAdmin:AuthAdminService) {
    this.getAllProduit();
    this.isConnected=localStorage.getItem("token");
    if(this.isConnected=="true")
    {
      let email: any = localStorage.getItem("email");
      this.uS.getUtilisateurByEmail(email).then((doc)=>
      {
        if(doc.exists)
        {
          const user:any = doc.data();
          this.panier = user.panier;
          this.paniS.envoiePanier(this.panier);
        }
      })
    }
  }

  changeDisplay()
  {
    this.class_row_filter = this.class_row_filter == "Row_filter" ? "Row_filter_display-none" : "Row_filter";
    this.icon_plus = this.icon_plus == "bx bx-plus" ? "bx bx-x" : "bx bx-plus";
    console.log(this.class_row_filter);
  }

  ProduitsFilter()
  {
    this.produitFilter.set("type",this.typeFilter);
    this.produitFilter.set("parfum",this.parfumFilter);
    this.produitFilter.set("pays",this.paysFilter);
    let nb_attr:number = 0;
    let keys:string[]=[];
    let values:string[]=[];
    for(let value of this.produitFilter.values())
    {
      if(value != "") nb_attr +=1;
    }
    for(let value of this.produitFilter.values())
    {
      if(value!="")
      values.push(value);
  
    }
    for(let key of this.produitFilter.keys())
    {
      if(this.produitFilter.get(key)!="")
      keys.push(key);

    }
    this.pS.getProduitsFilter(this.produitFilter,nb_attr).subscribe(res =>
      {
        this.produitList = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        this.nb_produits = this.produitList.length;
      });
    this.changeDisplay();
  }

  EffacerFilter()
  {
    this.paysFilter="";
    this.typeFilter="";
    this.parfumFilter="";
    this.getAllProduit();
    this.changeDisplay();
  }
//
  getAllProduit()
  {
    this.pS.getAllProduits().subscribe(res =>
      {
        this.produitList = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        this.nb_produits = this.produitList.length;
      })
  }

  onChange(event:any)
  {
    if(event.target.value !== "Pertinence")
    this.pS.getProduitByPrix(event.target.value).subscribe(res =>
      {
        this.produitList = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        this.nb_produits = this.produitList.length;
      })
  }

  minus_qty(produit:any)
  {
    if(produit.qte > 1)
    produit.qte--;
  }

  plus_qty(produit:any)
  {
    produit.qte++;
    if(produit.qte > produit.qteStock)
    {
      alert("Il nous reste "+produit.qteStock+ "!!");
      produit.qte--;
    }
    
  }

  addPanier(event:any)
  {
    let token:any = localStorage.getItem("token");
    if (token== "true")
    {
      this.totalPrix =0;
      let panierItem: panierItem =
      {
        idProduit : event.id ,
        nomProduit : event.nom ,
        urlProduit : event.url ,
        prixProduit : event.prix ,
        qteProduit : event.qte ,
        qteStock : event.qteStock
      }
      let email:any = localStorage.getItem("email");
      this.uS.getUtilisateurByEmail(email).then((doc) =>
        {
          if (doc.exists) {
            const data:any = doc.data();
            let cdt:boolean = false ;
            this.panier = data.panier;
            let stock:any = event.qteStock;
            if(panierItem.qteProduit <= event.qteStock)
            {
            for (let produit of this.panier)
            {
              if(produit.idProduit == panierItem.idProduit)
              {
                  produit.qteProduit += panierItem.qteProduit;
                  event.qteStock -=panierItem.qteProduit;
                  this.pS.updateQteStock(panierItem,event.qteStock);
                  panierItem.qteStock = event.qteStock
                  cdt =true;
              }
            }
            if(cdt == false)
            {
              this.panier.push(panierItem);
              event.qteStock -=panierItem.qteProduit
              this.pS.updateQteStock(panierItem,event.qteStock)
              panierItem.qteStock = event.qteStock
            }
              
            this.uS.getDoc(email).update(
              {
                panier: this.panier
              }
            )
            alert("Ajoute " + event.nom + " dans votre panier !");
            this.paniS.envoiePanier(this.panier);
            console.log (panierItem.qteProduit);
            console.log (event.qteStock);
          }
          else
          {

            alert("Il nous reste " + stock + " produits !")
          }
        }
        }
        
      )
      event.qte = 1 ;
      for(let panierItem of this.panier)
      {
        this.totalPrix += panierItem.qteProduit * panierItem.prixProduit
      }

    }
    else
      this.router.navigate(['/login'])
  }

  getAllPaniers()
  {
    this.paniS.getAllProduits().subscribe(res =>
      {
        this.test= res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        console.log(this.test);
      })
  }

  admin_add()
  {
    this.authAdmin.activeAuth();
    this.router.navigate(['/ajouteProduit']);
  }

  admin_minus()
  {
    this.authAdmin.activeAuth();
    this.router.navigate(['/retireProduit']);
  }

  ngOnInit(): void {
    let email:any = localStorage.getItem("email");
    this.uS.getUtilisateurByEmail(email).then((doc) =>
      {
        if (doc.exists) {
          const data:any = doc.data();
          let cdt:boolean = false ;
          this.panier = data.panier;
          this.utilisateur = data;
          this.uS.envoieUtilisateurObj(this.utilisateur);
        }
      })
  }
}
