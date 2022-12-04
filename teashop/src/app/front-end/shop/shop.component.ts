import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from '../../shared/service/produits.service';
import { CommandeService } from '../../shared/service/commande.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
 
  public class_row_filter:string = "Row_filter_display-none";
  public icon_plus = "bx bx-plus";
  constructor(private p:ProduitsService) {
  
  }
  changeDisplay()
  {
    this.class_row_filter = this.class_row_filter == "Row_filter" ? "Row_filter_display-none" : "Row_filter";
    this.icon_plus = this.icon_plus == "bx bx-plus" ? "bx bx-x" : "bx bx-plus";
    console.log(this.class_row_filter);
  }
  ngOnInit(): void {
  }

}