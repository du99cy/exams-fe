import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/abstract/base.component';
import { api_urls } from '@shared/configs/api_url';
import { takeUntil } from 'rxjs';
import { OrderService } from './services/order.service';

@Component({
  selector: 'ex-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent extends BaseComponent implements OnInit {
  readonly title = 'Lịch sử mua hàng';
  readonly noRecordMessage = 'Bạn chưa thực hiện giao dịch nào!';
  orders;

  link = api_urls.LOCAL_API_URL;
  constructor(private orderService: OrderService) {
    super();
  }
  ngOnInit() {
    this.getOrder();
  }
  getOrder() {
    this.orderService
      .getOrder()
      .pipe(takeUntil(this.ngUnsubscibed))
      .subscribe((res) => {
        this.orders = res.data;
      });
  }
}
