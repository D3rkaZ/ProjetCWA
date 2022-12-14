//import { Produit_Interface } from './produit_interface';

export interface Produit{
    id : string;
    nom : string ;
    titre : string;
    url : string;
    type : string;
    parfum : string;
    pays : string;
    prix : number;
    description : string;
    suggestion : string;
    qte : number;
    qteStock :number ;
}

// export class Produit implements Produit_Interface{
	
//     private id : number;
//     private name : string ;
//     private titre : string;
//     private url_img : string;
//     private type : string;
//     private parfum : string;
//     private country : string;
//     private price : number;
//     private desc : string;
//     private prepare : string;
    
//     constructor(id:number,name: string, titre:string, url_img : string, type:string,parfum: string,country:string,price :number,desc:string,prepare:string)
//         {
//             this.id = id ;
//             this.name = name ;
//             this.titre = titre
//             this.url_img = url_img ;
//             this.type = type ;
//             this.parfum = parfum ;
//             this.country = country ;
//             this.price = price ;
//             this.desc = desc ;
//             this.prepare = prepare ;
//         }
//         public getIdProduit():number{return this.id;}
//         public getName():string{return this.name;}
//         public getTitre():string{return this.titre;}
//         public getUrl():string{return this.url_img;}
//         public getType():string{return this.type;}
//         public getDescription():string{return this.desc;}
//         public getCountry():string{return this.country;}
//         public getPrix():number{return this.price;}
//         public getPrepare():string{return this.prepare;}

//         public setIdProduit(id:number):void{this.id=id;}
//         public setName(name:string):void{this.name=name;}
//         public setTitre(titre:string):void{this.titre=titre;}
//         public setUrl(url:string):void{this.url_img=url;}
//         public setType(type:string):void{this.type=type;}
//         public setParfum(parfum:string):void{this.parfum=parfum;}
//         public setCountry(county:string):void{this.country=county;}
//         public setPrix(prix:number):void{this.price=prix;}
//         public setDescription(desc:string):void{this.desc=desc;}
//         public setPrepare(prepare:string):void{this.prepare=prepare;}
//     }