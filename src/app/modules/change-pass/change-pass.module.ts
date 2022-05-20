import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpsModule } from '@shared/modules/https.module';
import { ChangePassRoutingModule } from './change-pass-routing.module';
import { ChangePassComponent } from './components/change-pas/change-pas.component';

@NgModule({
  imports: [
    ChangePassRoutingModule,
    MatFormFieldModule,
    MatPasswordStrengthModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  declarations: [
    ChangePassComponent
  ],
})
export class ChangePassModule {}
