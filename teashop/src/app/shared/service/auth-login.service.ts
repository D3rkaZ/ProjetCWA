import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from '../modele/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  email:string="";
  password:string="";
  user:Utilisateur[] =[];
  constructor(private users:UtilisateurService,private fireauth : AngularFireAuth, private router : Router) { }

  // method login

  login(email:string,  password:string)
  {
    this.email=email;
    this.password=password;
    this.users.getUtilisateur(email).subscribe(res =>
      {
        this.user = res.map((e:any)=>
        {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        if(this.user.length !=0)
        {
          if(this.user[0].mdp == password)
          {
            localStorage.setItem("token","true");
            this.router.navigate(['/shop'], { queryParams: { id:this.user[0].id } });
          }
         
          else
          {
            alert("Vérifiez votre mot de passe !");
            this.router.navigate(['/login']);
          }
        }
        else
        {
          alert("Vérifiez votre email !");
          this.router.navigate(['/login']);
        }
      })

    // this.fireauth.signInWithEmailAndPassword(email,password).then(()=>
    // {
    //   localStorage.setItem("nom","vantai");
    //   localStorage.setItem("token","true");
    //   this.router.navigate(['/shop'], { queryParams: { name:"vantai" } });
    // },(err:any) =>
    // {
    //   console.log('false');
    //   alert("Vérifiez votre email ou votre mot de passe !");
    //   this.router.navigate(['/login']);
    // })
  }
}
