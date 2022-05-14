import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from '@modules/checkout/services/checkout.service';
import { BaseComponent } from '@shared/abstract/base.component';

@Component({
  selector: 'ex-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent extends BaseComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private checkoutService: CheckoutService
  ) {
    super();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.checkoutService.saveOrder(params).subscribe((res)=> {
        console.log(res)
      })
    });
  }
}
