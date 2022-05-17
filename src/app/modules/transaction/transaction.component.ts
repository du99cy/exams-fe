import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/abstract/base.component';
import { takeUntil } from 'rxjs';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'ex-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent extends BaseComponent implements OnInit {
  trans: any = [];
  readonly title = 'Lịch sử nạp tiền';
  readonly noRecordMessage = 'Bạn chưa thực hiện giao dịch nào!';
  constructor(private transactionService: TransactionService) {
    super();
  }
  ngOnInit(): void {
    this.getTransactions();
  }
  getTransactions() {
    this.transactionService
      .getTransactions()
      .pipe(takeUntil(this.ngUnsubscibed))
      .subscribe((res) => {this.trans = res.data});
  }
  getDate(date) {
    let years = date.slice(0, 4);
    let months = date.slice(4, 6);
    let days = date.slice(6, 8);
    let hours = date.slice(8, 10);
    let mintutes = date.slice(10, 12);
    let seconds = date.slice(12, 14);
    return (
      years +
      '/' +
      months +
      '/' +
      days +
      ' ' +
      hours +
      ':' +
      mintutes +
      ':' +
      seconds
    );
  }
}
