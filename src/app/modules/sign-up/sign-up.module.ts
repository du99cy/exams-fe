import { NgModule } from '@angular/core';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { signUpRoutingModule } from './sign-up-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

const modules = [
  signUpRoutingModule,
  MatFormFieldModule,
  MatPasswordStrengthModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatSlideToggleModule,
  MatButtonModule,


];
const components = [SignUpComponent];
@NgModule({
  imports: [...modules],
  declarations: [...components],
})
export class signUpModule {}
