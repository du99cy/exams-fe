import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, CheckoutRoutingModule, MaterialModule],
  exports: [],
})
export class CheckoutModule {}
