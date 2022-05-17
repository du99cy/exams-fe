import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "@shared/modules/material.module";
import { OrderRoutingModule } from "./order-routing.module";
import { OrderComponent } from "./order.component";
import { OrderService } from "./services/order.service";

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrderRoutingModule, MaterialModule],
  providers: [OrderService]
})
export class OrderModule{}
