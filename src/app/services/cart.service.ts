import { Injectable } from '@angular/core';
import { Product} from '../models/Products';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  cart : CartItem[] = []
  constructor() { }

  add(quantity: number, product: Product){
    // Check if the product is already present in the cart
    const existingItem = this.cart.find((item)=> item.id === product.id)

     if(existingItem){
      // If the product already exists, update its quantity
      existingItem.quantity += quantity
     }else{
      // If the product is not in the cart, add a new item representing the product
      this.cart.push({quantity ,id: product.id, product})
     }
      // Show an alert message to indicate that the product has been successfully added
     window.alert('Product successfully added')
  }
  get() : CartItem[] {
      return this.cart
  }

  remove(product : string | Number){
    const confirmation = window.confirm('Are you sure you want to remove this product?')
    if(confirmation){
      this.cart = this.cart.filter((item)=> item.id !== product)
    }
  }
  ///------------------------------------------
  getSubtotal(): any {
    return this.cart
      .reduce(
        (acc: any, current: CartItem): any =>
          acc + Number(current.product.price) * current.quantity,
        0
      )
      .toFixed(2);
  }
  clear(): void {
    this.cart = [];
  }
}
