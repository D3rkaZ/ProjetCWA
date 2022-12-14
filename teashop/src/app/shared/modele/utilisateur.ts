import { panierItem } from './panierItem';
export interface Utilisateur
{
    id : string,
    nom : string ,
    prenom : string,
    email : string ,
    mdp : string ,
    date_naissance :string,
    role :string,
    panier : panierItem[]
}