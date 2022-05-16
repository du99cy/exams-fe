import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/abstract/base.component';

@Component({
  selector: 'ex-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent extends BaseComponent implements OnInit {
  trans: any = [
    {
      transaction_id: 'ts0123129',
      amount: 1000000,
      time: new Date(),
      isRecharge: true,
      desc: 'Nap tien ngay ' + new Date().toLocaleString(),
    },
    {
      transaction_id: 'ts0123129',
      amount: 1000000,
      time: new Date(),
      isRecharge: true,
      desc: 'Nap tien ngay ' + new Date().toLocaleString(),
    },
    {
      transaction_id: 'ts0123129',
      amount: 1000000,
      time: new Date(),
      isRecharge: true,
      desc: 'Nap tien ngay ' + new Date().toLocaleString(),
    },
    {
      transaction_id: 'ts0123129',
      amount: 1000000,
      time: new Date(),
      isRecharge: false,
      desc: 'Nap tien ngay ' + new Date().toLocaleString(),
    },
  ];
  readonly title = 'Danh sách giao dịch';
  readonly noRecordMessage = 'Bạn chưa thực hiện giao dịch nào!';
  constructor() {
    super();
  }
  ngOnInit(): void {}
}
