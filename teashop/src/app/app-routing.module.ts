import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './front-end/shop/shop.component';
import { HomeComponent } from './front-end/home/home.component';
import { LoginComponent } from './front-end/login/login.component';
import { CartComponent } from './front-end/cart/cart.component';
import { DeliveryComponent } from './front-end/delivery/delivery.component';
import { PaymentComponent } from './front-end/payment/payment.component';
import { ProduitComponent } from './front-end/shop/produit/produit.component';
import { RecommendProduitComponent } from './front-end/recommend-produit/recommend-produit.component';
import { AjouteProduitComponent } from './front-end/ajoute-produit/ajoute-produit.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent    
  },
  {
    path:'shop',
    component : ShopComponent
  },
  {
    path:'login',
    component : LoginComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:"dely",
    component: DeliveryComponent
  },
  {
    path:"pay",
    component: PaymentComponent
  },
  {
    path:"produit/:id",
    component: ProduitComponent
  },
  {
    path:'ajouteProduit',
    component: AjouteProduitComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
