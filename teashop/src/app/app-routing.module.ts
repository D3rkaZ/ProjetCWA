import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ShopComponent } from './front-end/shop/shop.component';
import { HomeComponent } from './front-end/home/home.component';
import { LoginComponent } from './front-end/login/login.component';
import { CartComponent } from './front-end/cart/cart.component';
import { DeliveryComponent } from './front-end/delivery/delivery.component';
import { PaymentComponent } from './front-end/payment/payment.component';
import { ProduitComponent } from './front-end/shop/produit/produit.component';
import { RecommendProduitComponent } from './front-end/recommend-produit/recommend-produit.component';
import { AjouteProduitComponent } from './front-end/ajoute-produit/ajoute-produit.component';
import { ValideComponent } from './front-end/valide/valide.component';
import { AuthGuard } from './shared/authGuards/auth.guard';
import { AuthPaymentGuard } from './shared/authGuards/auth-payment.guard';
import { AuthValideGuard } from './shared/authGuards/auth-valide.guard';
import { RetireProduitComponent } from './front-end/retire-produit/retire-produit.component';
import { AuthAdminGuard } from './shared/authGuards/auth-admin.guard';

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
    component: DeliveryComponent,
    canActivate : [AuthGuard]
  },
  {
    path:"pay",
    component: PaymentComponent,
    canActivate : [AuthPaymentGuard]
  },
  {
    path:"produit/:id/:type",
    component: ProduitComponent
  },
  {
    path:'ajouteProduit',
    component: AjouteProduitComponent,
    canActivate : [AuthAdminGuard]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'OK',
    component: ValideComponent,
    canActivate : [AuthValideGuard]
  },
  {
    path:'retireProduit',
    component : RetireProduitComponent,
    //canActivate : [AuthAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
