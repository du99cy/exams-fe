import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { loginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  loginRoutingModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [LoginComponent, ForgotPasswordComponent],
})
export class loginModule {}
