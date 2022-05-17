import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CoursePublishService } from './services/course-publish.service';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, MaterialModule],
  providers: [CoursePublishService],
  exports: [],
})
export class CartModule {}
