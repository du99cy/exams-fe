import { Injectable } from '@angular/core';
import { ICourse } from '../models/interface';
import * as _ from 'lodash';

@Injectable()
export class CartService {
  constructor() {}
  addToCart(item: ICourse) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart?.length > 0) {
      cart = _.filter(cart, (c) => c._id !== item._id);
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else localStorage.setItem('cart', JSON.stringify([item]));
  }
}
