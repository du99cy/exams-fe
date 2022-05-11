import { Injectable } from '@angular/core';
import { ICourse } from '../models/interface';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  get Cart() {
    return JSON.parse(localStorage.getItem('cart'));
  }
  set Cart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  addToCart(item: ICourse) {
    let cart = this.Cart;
    if (cart?.length > 0) {
      cart = _.filter(cart, (c) => c._id !== item._id);
      cart.push(item);
      this.Cart = cart;
    } else this.Cart = [item];
  }
  removeCart(id: string) {
    let cart = this.Cart;
    const index = _.findIndex(cart, (c: ICourse) => c._id === id);
    cart.splice(index, 1);
    this.Cart = cart;
  }
}
