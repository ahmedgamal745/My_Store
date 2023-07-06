import { Component, DoCheck, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout-panel',
  templateUrl: './checkout-panel.component.html',
  styleUrls: ['./checkout-panel.component.scss']
})
export class CheckoutPanelComponent implements OnInit , DoCheck{
    constructor(private cartService:CartService){}
  cart :CartItem[] = [];

  subTotal: number = 0 ; 
  ngOnInit(): void {
    // this.cart = this.cartService.get()
    this.loadCart();
  }
  ngDoCheck(): void {
    this.subTotal = this.cartService.getSubtotal();
    this.updateCart();
  }

  private loadCart(){
    this.cart =this.cartService.get()
  }
  private updateCart(){
    const UpdateCarts = this.cartService.get()
    if(this.IsEqual(UpdateCarts, this.cart)){
      this.loadCart();
    }
  }

  private IsEqual(array1: CartItem[], array2 : CartItem[]){
    if(array1.length !== array2.length){
      return true
    }
    for(let i = 0 ; i < array1.length ; i++){
      if (!this.areItemsEqual(array1[i], array2[i])) {
        return true;
      }
    }
    return false
  }

  private areItemsEqual(item1: CartItem, item2: CartItem): boolean {
    // Compare properties of CartItem objects to determine equality
    return item1.id === item2.id && item1['name'] === item2['name'] && item1['price'] === item2['price'];
  }

}
  


