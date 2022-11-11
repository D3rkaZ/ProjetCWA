import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css']
})
export class CartShopComponent implements OnInit {

  constructor() { }
  public width_shop:string ="cart_shop";
  public height_shop:string="cart_shop_item";

  ngOnInit(): void {
  }
  changeTaillePanier()
  {
    this.width_shop = this.width_shop=="cart_shop" ? "cart_shop_click" : "cart_shop";
    this.height_shop = this.height_shop=="cart_shop_item" ? "cart_shop_item_click" : "cart_shop_item";
  }

}
