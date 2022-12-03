import { Produit_Interface } from './produit_interface';
import { Produit } from './produit';

export class GestionProduit
{
    public liste_produit : Produit_Interface[];

    constructor()
    {
        this.liste_produit = [];
    }
    public getListeProduit():Produit_Interface[]
    {
        return this.liste_produit;
    }

    public setListeProduit(l : Produit_Interface[]):void
    {
        this.liste_produit = l;
    }

    public ajouteProduit(p:Produit_Interface ):void
    {
        this.liste_produit.push(p);
    }

    public getAllProduit()
    {
        // return DataBase.executeSQL().then(
        //     function(rows:any){

        // }
        // )
    }

}