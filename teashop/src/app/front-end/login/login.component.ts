import { Component, OnInit } from '@angular/core';

import { Utilisateur } from '../../shared/modele/utilisateur';
import { UtilisateurService } from '../../shared/service/utilisateur.service';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/shared/service/auth-login.service';
import { updatePassword } from 'firebase/auth';
import { panierItem } from '../../shared/modele/panierItem';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers :[AuthLoginService , UtilisateurService]
})
export class LoginComponent implements OnInit {

  block_connection:string = "block_connection_switch";
  block_creation:string = "block_creation";
  form_connection:string="form_connection";
  form_creation:string="form_creation_switch";
  Row2_login_form:string="Row2_login_form";

  id:string='';
  nom:string='';
  prenom:string='';
  date_naissance='';
  email:string ="";
  mdp:string ="";

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
  hihinom:string="";
  constructor(private auth:AuthLoginService , private uS:UtilisateurService,private router:Router) { 
    this.session_connecte = localStorage.getItem("token");

    if(localStorage.getItem("token")=="true")
    {
      let email:any = localStorage.getItem("email");
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

  ngOnInit(): void {
  }
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
    this.auth.login(this.email,this.mdp);
    this.email="";
    this.mdp="";
  }

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
    this.auth.createUser(this.utilisateur);
    this.uS.addUser(this.utilisateur);
  }

  logout()
  {
    this.auth.logout();
  }

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

  updatePassword()
  {
    this.auth.updateMdp(this.newPassword);
    //console.log(this.newPassword);
  }
}
