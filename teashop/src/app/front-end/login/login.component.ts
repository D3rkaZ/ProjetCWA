import { Component, OnInit } from '@angular/core';

import { Utilisateur } from '../../shared/modele/utilisateur';
import { UtilisateurService } from '../../shared/service/utilisateur.service';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/shared/service/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  /* des fonctionnalité UI */
  block_connection:string = "block_connection_switch";
  block_creation:string = "block_creation";
  form_connection:string="form_connection";
  form_creation:string="form_creation_switch";
  Row2_login_form:string="Row2_login_form";
  /* Initialise des attributs d'un utilisateur */
  id:string='';
  nom:string='';
  prenom:string='';
  date_naissance='';
  email:string ="";
  mdp:string ="";
  /* session de connexion  */
  session_connecte:any;
  utilisateur:Utilisateur = {
    id:'',
    nom:'',
    prenom:'',
    email:'',
    mdp:'',
    date_naissance:'',
    role:'client',
    panier: [],
  }

  user:Utilisateur[]=[];
  newPassword:string="";

  constructor(private auth:AuthLoginService, private uS:UtilisateurService, private router:Router) { 

    /* localStorage : une méthode stockage de données en local du côte cliente
    * email : email de l'utilisateur (par défaut : none)
    * token : token de connexion de l'utilisateur (True/False)
    */

    this.session_connecte = localStorage.getItem("token");

    if(localStorage.getItem("token")=="true")
    {
      let email:any = localStorage.getItem("email");
      /* l'appel la fonction getUtilisateurByEmail par UtilisateurService qui permet à récupèrer d'utilisateur par email */
      this.uS.getUtilisateurByEmail(email).then((doc)=>
      {
        if(doc.exists)
        {
          const user:any = doc.data();
          this.utilisateur = user;
        }
      })
    }
  }

  ngOnInit(): void { }

  /* Méthode Login */
  login()
  {
    if(this.email=="")
    {
      alert("Entrez votre email !");
      return;
    }
    if(this.mdp=="")
    {
      alert("Entrez votre mot de passe !");
      return;
    }
    /* Méthode auth de AngularFireBase */
    this.auth.login(this.email,this.mdp);
    this.email="";
    this.mdp="";
  }
  /* Crée d'un utilisateur  */
  register()
  {
    if(this.nom==''||this.prenom==''||this.date_naissance==''||this.email==''||this.mdp=='')
    {
      alert('Fill all in put fields');
      return;
    }
    this.utilisateur.nom = this.nom;
    this.utilisateur.prenom = this.prenom;
    this.utilisateur.date_naissance = this.date_naissance;
    this.utilisateur.email = this.email;
    this.utilisateur.mdp = this.mdp;
    this.utilisateur.panier =[];
    /* l'appel la méthode createUser() aui permet à créer d'un nouveau utilisateur */
    this.auth.createUser(this.utilisateur);
    this.uS.addUser(this.utilisateur);
  }

  /* Méthode Logout */
  logout()
  {
    /* Méthode logout de AngularFireBase */
    this.auth.logout();
  }

  /* Fonctionnalité UI */
  changeOptionConnection()
  {
    if (this.block_connection == "block_connection")
    {
      this.block_connection= "block_connection_switch";
      this.form_connection="form_connection";
      this.Row2_login_form="Row2_login_form";
    }
    this.form_creation="form_creation_switch";
    this.block_creation = "block_creation";
  }
  changeOptionCreation()
  {
    if (this.block_creation == "block_creation")
    {
      this.block_creation= "block_creation_switch";
      this.form_creation="form_creation";
      this.Row2_login_form="Row2_login_form_creation";
    }
    this.form_connection="form_connection_switch";
    this.block_connection = "block_connection";
  }

  /* Mise à jour une nouvelle mot de passe */
  updatePassword()
  {
    this.auth.updateMdp(this.newPassword);
  }
}
