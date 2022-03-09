import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { loginRoutingModule } from './login-routing.module';

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  loginRoutingModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [LoginComponent],
})
export class loginModule {}
