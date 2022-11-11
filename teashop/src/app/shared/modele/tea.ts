export class Tea {
	
    public name : string ;
    public url_img : string;
    public color : string;
    public country : string;
    public desc : string;
    public detail_desc : string
    public price : number;
    public quantity :  number;
    public prepare : string;
    
    
    constructor(name: string, url_img : string, desc: string, color:string,country:string,price :number,quantity:number,detail_desc:string,prepare:string)
        {
        this.name = name;
        this.url_img = url_img;
        this.desc = desc;
        this.color = color ;
        this.country = country;
        this.price = price;
        this.quantity =  quantity;
        this.detail_desc = detail_desc;
        this.prepare = prepare;
        }
    }