import { NgModule } from '@angular/core';
import { ConfirmTokenRoutingModule } from './confirm-token-routing.module';
import { ConfirmTokenComponent } from './components/confirm-token/confirm-token.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const MODULES = [ConfirmTokenRoutingModule,MatButtonModule,CommonModule]

@NgModule({
  imports: [ ...MODULES ],
  declarations: [
    ConfirmTokenComponent
  ],
})
export class ConfirmTokenModule { }
