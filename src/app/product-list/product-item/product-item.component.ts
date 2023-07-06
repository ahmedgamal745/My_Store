import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent{
  @Input() product : Product = new Product()
  quantity: number = 1
  constructor(private cartService : CartService){

  }

  updateQuantity(event:Event){
    this.quantity = Number((event))
  }

  addToCart(){
    this.cartService.add(this.quantity, this.product)
  }
}
