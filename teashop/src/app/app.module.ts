import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './front-end/shop/shop.component';
import { MenuComponent } from './front-end/menu/menu.component';
import { HomeComponent } from './front-end/home/home.component';
import { FooterComponent } from './front-end/footer/footer.component';
import { CartComponent } from './front-end/cart/cart.component';
import { CartShopComponent } from './front-end/shop/cart-shop/cart-shop.component';
import { LoginComponent } from './front-end/login/login.component';
import { DeliveryComponent } from './front-end/delivery/delivery.component';
import { PaymentComponent } from './front-end/payment/payment.component';
import { ProduitComponent } from './front-end/shop/produit/produit.component';
import { RecommendProduitComponent } from './front-end/recommend-produit/recommend-produit.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AjouteProduitComponent } from './front-end/ajoute-produit/ajoute-produit.component';
import { FormsModule } from '@angular/forms';
import { ValideComponent } from './front-end/valide/valide.component';
import { RetireProduitComponent } from './front-end/retire-produit/retire-produit.component'


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    CartShopComponent,
    LoginComponent,
    DeliveryComponent,
    PaymentComponent,
    ProduitComponent,
    RecommendProduitComponent,
    AjouteProduitComponent,
    ValideComponent,
    RetireProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
