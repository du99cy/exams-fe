import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '@modules/checkout/services/checkout.service';
import { ICourse } from '@modules/home/models/interface';
import { CartService } from '@modules/home/services/cart.service';
import { BaseComponent } from '@shared/abstract/base.component';
import * as _ from 'lodash';

@Component({
  selector: 'ex-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent extends BaseComponent implements OnInit {
  cart: ICourse[];
  readonly title = 'Giỏ hàng của bạn';
  readonly noRecordMessage = 'Giỏ hàng của bạn đang rỗng!';
  readonly total = 'Tổng';
  readonly checkout = 'Thanh toán';
  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {
    super();
  }
  ngOnInit(): void {
    this.cart = this.cartService.Cart;
  }
  getTotal() {
    return _.reduce(
      this.cart,
      (sum, item) => +sum + +item.thoi_gian_bat_dau,
      0
    );
  }
  remove(id: string) {
    this.cartService.removeCart(id);
    this.cart = this.cartService.Cart;
  }
  onCheckout() {
    this.checkoutService.redirectToPayment({
      amount: 1000000,
      bank_code: 'NCB',
      order_id: Math.random().toString(),
    }).subscribe(res => {
      window.location.href = res.data
    });
  }
}
