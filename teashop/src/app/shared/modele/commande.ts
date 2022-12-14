import { panierItem } from './panierItem';
import { livraison } from './livraison';
export interface Commande{
    idCommande : string ;
    emailUtilisateur : string ;
    panier : panierItem[] ;
    addr_livraison : livraison ;
    methode_paiement : string ;
}