import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/modules/material.module';
import { Alphanumeric } from './directive/alphanumeric.directive';
import { NumberMask } from './directive/number-mask.directive';
import { RechargeRoutingModule } from './recharge-routing.module';
import { RechargeComponent } from './recharge.component';
import { RechargeService } from './services/recharge.service';

@NgModule({
  declarations: [RechargeComponent, Alphanumeric, NumberMask],
  imports: [
    CommonModule,
    RechargeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
  providers: [RechargeService]
})
export class RechargeModule {}
