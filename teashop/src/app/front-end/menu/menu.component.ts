import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from '../../shared/service/auth-login.service';
import { UtilisateurService } from '../../shared/service/utilisateur.service';
import { Utilisateur } from '../../shared/modele/utilisateur';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[AuthLoginService, UtilisateurService]
})
export class MenuComponent implements OnInit {
  public uid:any=localStorage.getItem("uid");
  public email:any=localStorage.getItem("email");
  public token:any=localStorage.getItem("token");
  public utilisateur:Utilisateur = {
    id:'',
    nom:'Mon compte',
    prenom:'',
    email:'',
    mdp:'',
    date_naissance:'',
    role:'',
    panier: [],
  }
  constructor(private auth:AuthLoginService , private uS:UtilisateurService) { 
  }
  
  ngOnInit(): void {
    if(this.token=="true")
    {
      this.uS.getUtilisateurByEmail(this.email).then((doc)=>
      {
        if(doc.exists)
        {
          const user:any = doc.data();
          this.utilisateur =user;
        }
      })
    }
  }

}
