import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { CheckoutPanelComponent } from './checkout-panel/checkout-panel.component';
import { CheckoutConfirmComponent } from './checkout-panel/checkout-confirm/checkout-confirm.component';

const routes: Routes = [
  {path: '' , component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'checkout', component: CheckoutPanelComponent },
  { path: 'checked-out', component: CheckoutConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
