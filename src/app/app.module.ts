import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutPanelComponent } from './checkout-panel/checkout-panel.component';
import { CartItemComponent } from './checkout-panel/cart-item/cart-item.component';
import { CheckoutConfirmComponent } from './checkout-panel/checkout-confirm/checkout-confirm.component';
import { CheckoutFormComponent } from './checkout-panel/checkout-form/checkout-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutPanelComponent,
    CartItemComponent,
    CheckoutConfirmComponent,
    CheckoutFormComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
