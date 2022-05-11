import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@shared/abstract/base.component";

@Component({
  selector: 'ex-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent extends BaseComponent implements OnInit{
  constructor(private route: ActivatedRoute){
    super();
  }
  ngOnInit(): void {
    console.log(this.route)
  }
}
