import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "@shared/modules/material.module";
import { TransactionRoutingModule } from "./transaction-routing.module";
import { TransactionComponent } from "./transaction.component";

@NgModule({
  declarations: [TransactionComponent],
  imports: [CommonModule, TransactionRoutingModule, MaterialModule],
  providers: [],
  exports: []
})
export class TransactionModule{}
