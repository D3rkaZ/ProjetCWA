import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from '../modele/utilisateur';
import { getAuth, createUserWithEmailAndPassword, updatePassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  email:string="";
  password:string="";
  user:Utilisateur[] =[];
  public uid:any= localStorage.getItem('uid');
  constructor(private users:UtilisateurService,private fireauth : AngularFireAuth, private router : Router) { }

  // method login
  login(email:string,  password:string)
  {
    const auth = getAuth();
    /* Utilise la méthode signInWithEmailAndPassword de AngularFireBase */
    this.fireauth.signInWithEmailAndPassword(email,password).then((userCredential)=>
    {
      const user = userCredential.user;
      const uid:any = user?.uid;
    /* Définie des valeurs dans localStorage
    * email : email de l'utilisateur (par défaut : none)
    * token : token de connexion de l'utilisateur (True/False)
    * uid : uid d'Utilisateur dès qu'il a connecté
    */
      localStorage.setItem("uid",uid);
      localStorage.setItem("email",email);
      localStorage.setItem("token","true");
      this.router.navigate(['/shop'], { queryParams: { uid:user?.uid } });
    },(err:any) =>
    {
      alert("Vérifiez votre email ou votre mot de passe !");
      this.router.navigate(['/login']);
    })
  }

  //logout 
  logout()
  {
    /* Utilise la méthode signout de AngularFireBase */

    this.fireauth.signOut().then(() => {
      localStorage.setItem("token","false");
      localStorage.setItem("uid","none");
      localStorage.setItem("email","");
      this.router.navigate(['/home'],{ queryParams: {uid :this.uid}});
    }).catch((error) => {
      // An error happened.
    });
  }

  //create an user
  createUser(utilisateur:Utilisateur)
  {
    /* Utilise la méthode createUserWithEmailAndPassword dans AngularFireBase */
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,utilisateur.email,utilisateur.mdp)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    this.login(utilisateur.email, utilisateur.mdp);
  })
  .catch((error) => {
    alert(error.message)
  });
  }

  //update password
  updateMdp(newPassword:string)
  {
    const auth = getAuth();
    const user = this.fireauth.currentUser.then((u)=>
      {
      const user = u?.updatePassword(newPassword).then(()=>
          {
            alert("Mise à jour votre mot de passe !");
            this.router.navigate(['/shop']);
          }
        )
      }
    )
    .catch()
    {
      alert("Le nouveau mot de passe doit d'avoir au moins 6 caractères ! ");
      return;
    }
  }
}


