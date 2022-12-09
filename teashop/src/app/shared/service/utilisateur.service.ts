import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Utilisateur } from '../modele/utilisateur';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private database:AngularFirestore, private router:Router) { }

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
      user.id = this.database.createId();
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
            this.database.collection('/Utilisateurs').add(user);
            return;
          }
          else
          { 
            return;
          }
            

        })
    }

    //update password
    updatePassord()
    {
     
    }
}
