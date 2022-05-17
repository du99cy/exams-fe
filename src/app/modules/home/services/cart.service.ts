import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, Subject } from 'rxjs';
import { Course } from '@modules/new-course-creation/models/course';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _refresh$ = new BehaviorSubject<any>(null);
  constructor() {}
  get refresh$(){
    return this._refresh$.asObservable();
  }
  get Cart() {
    return JSON.parse(localStorage.getItem('cart'));
  }
  set Cart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this._refresh$.next(cart);
  }
  addToCart(item: Course) {
    let cart = this.Cart;
    if (cart?.length > 0) {
      cart = _.filter(cart, (c) => c._id !== item.id);
      cart.push(item);
      this.Cart = cart;
    } else this.Cart = [item];
  }
  removeCart(id: string) {
    let cart = this.Cart;
    const index = _.findIndex(cart, (c: Course) => c.id === id);
    cart.splice(index, 1);
    this.Cart = cart;
  }
  clearCart(){
    localStorage.removeItem('cart')
  }
}
