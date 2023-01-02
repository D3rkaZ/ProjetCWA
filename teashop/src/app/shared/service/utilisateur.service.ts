import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Utilisateur } from '../modele/utilisateur';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { panierItem } from '../modele/panierItem';
import { AuthLoginService } from '../../shared/service/auth-login.service';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  public utilisateurObj = new BehaviorSubject<Utilisateur>({id:"",nom:"" ,prenom :"" , email:"" ,mdp:"", date_naissance: "", role :"" , panier : []});
  constructor(private database:AngularFirestore, private router:Router) { }

  getDoc(email:string)
  {
    return this.database.collection('/Utilisateurs').doc(email);
  }
  //get all users
  getAllUtilisateurs()
  {
    return this.database.collection('/Utilisateurs').snapshotChanges();
  }
  getUtilisateur(email:string)
  {
    return this.database.collection('/Utilisateurs', ref=> ref.where("email","==",email)).snapshotChanges();    
  }

    //add an user
  addUser(user: Utilisateur)
    {
      let users:Utilisateur[]=[];
      //user.id = this.database.createId();
      this.getUtilisateur(user.email).subscribe(res =>
        {
          users = res.map((e:any)=>
          {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
          });
          console.log(users);
          if(users.length ==0)
          {
            this.database.collection('/Utilisateurs').doc(user.email).set(
              {
                nom : user.nom,
                prenom : user.prenom,
                date_naissance : user.date_naissance,
                panier : [],
                role : "client"
              }
            );
          }
          else
          { 
            return;
          }
        })
    }

  //get Utilisateur by email
  getUtilisateurByEmail(email:string)
  {
    return this.database.collection('/Utilisateurs').doc(email).ref.get();
  }

  //evoie l'utilisateur enbtre des components différentes

  envoieUtilisateurObj(user : Utilisateur)
  {
    this.utilisateurObj.next(user);
  }

}
