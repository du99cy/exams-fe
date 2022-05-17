import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '@modules/checkout/services/checkout.service';
import { ICourse } from '@modules/home/models/interface';
import { CartService } from '@modules/home/services/cart.service';
import { Course } from '@modules/new-course-creation/models/course';
import { BaseComponent } from '@shared/abstract/base.component';
import { api_urls } from '@shared/configs/api_url';
import * as _ from 'lodash';

@Component({
  selector: 'ex-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent extends BaseComponent implements OnInit {
  cart: Course[];
  readonly title = 'Giỏ hàng của bạn';
  readonly noRecordMessage = 'Giỏ hàng của bạn đang rỗng!';
  readonly total = 'Tổng';
  readonly checkout = 'Thanh toán';
  link = api_urls.LOCAL_API_URL;
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
      (sum, item) => +sum + +item.price,
      0
    );
  }
  remove(id: string) {
    this.cartService.removeCart(id);
    this.cart = this.cartService.Cart;
  }
  onCheckout() {
  }
}
