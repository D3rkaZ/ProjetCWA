import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/shared/service/auth-login.service';
import { Utilisateur } from '../../shared/modele/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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

  utilisateur:Utilisateur = {
    id:'',
    nom:'',
    prenom:'',
    email:'',
    mdp:'',
    date_naissance:'',
    role:'client',
  }

  constructor(private auth:AuthLoginService) { }

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
    //console.log(localStorage.getItem("nom"));
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
}
