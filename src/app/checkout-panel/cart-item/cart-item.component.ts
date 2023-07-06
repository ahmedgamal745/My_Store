import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
@Input() cartItem: CartItem = new CartItem();

constructor(private cartService : CartService){}

updateQuantity(event: Event){
  this.cartItem.quantity += Number(event)
  console.log(  this.cartItem.quantity)
}

removeItem(){
  this.cartService.remove(this.cartItem.id);
}
}
