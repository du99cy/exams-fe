import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteComponent } from './favourite.component';
@NgModule({
  declarations: [FavouriteComponent],
  imports: [CommonModule, FavouriteRoutingModule, MaterialModule],
  providers: [],
  exports: [],
})
export class FavouriteModule {}
