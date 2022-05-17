import { Component, OnInit } from '@angular/core';
import { CoursePublishService } from '@modules/cart/services/course-publish.service';
import { CheckoutService } from '@modules/checkout/services/checkout.service';
import { ICourse } from '@modules/home/models/interface';
import { CartService } from '@modules/home/services/cart.service';
import { Course } from '@modules/new-course-creation/models/course';
import { BaseComponent } from '@shared/abstract/base.component';
import { api_urls } from '@shared/configs/api_url';
import * as _ from 'lodash';
import { forkJoin, pipe, takeUntil } from 'rxjs';

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
  checkoutResponse: string;
  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private coursePublishService: CoursePublishService
  ) {
    super();
  }
  ngOnInit(): void {
    this.getCart();
  }
  async getCart() {
    let c: any[] = [];

    let test = this.cartService.Cart?.map((c: any) =>
      this.coursePublishService.get(c.id)
    );
    console.log(this.cart, test);
    forkJoin(...test).subscribe((res) => {
      this.cart = [...res];
      this.cartService.Cart = this.cart;
      console.log(this.cart);
    });
    // })
    // await this.cartService.Cart.forEach((cart: any) => {
    //   this.coursePublishService
    //     .get(cart.id)
    //     .pipe(takeUntil(this.ngUnsubscibed))
    //     .subscribe((res) => {
    //       c.push(res);
    //     });
    // });
    // return c;
  }
  getTotal() {
    return _.reduce(this.cart, (sum, item) => +sum + +item.price, 0);
  }
  remove(id: string) {
    this.cartService.removeCart(id);
    this.cart = this.cartService.Cart;
  }
  onCheckout() {
    let cart = this.cartService.Cart.map((c: any) => c.id);
    this.checkoutService
      .checkout(cart)
      .pipe(takeUntil(this.ngUnsubscibed))
      .subscribe(
        (res) => {
          this.cartService.clearCart();
          if (res.message === 'success') {
            this.checkoutResponse = 'Thanh toán thành công';
          }
        },
        (err) => {
          if (err.error.detail === 'Not enough money')
            this.checkoutResponse = 'Số dư không đủ để thanh toán';
          else this.checkoutResponse = 'Thanh toán không thành công';
        }
      );
  }
}
