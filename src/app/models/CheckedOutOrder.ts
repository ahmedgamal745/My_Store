
import { User } from './User';
import { CartItem } from './cartItem';

export class CheckedOutOrder {
  user: User;
  cart: CartItem[];

  constructor() {
    this.user = new User();
    this.cart = [];
  }
}
