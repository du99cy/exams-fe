import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CodingExamRoutingModule } from './coding-exam-routing.module';
import { CodingExamComponent } from './components/coding-exam/coding-exam.component';
import { OptionCodingEditorComponent } from './components/option-coding-editor/option-coding-editor.component';
import { DialogSubmitComponent } from './components/dialog-submit/dialog-submit.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AngularSplitModule } from 'angular-split';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion'; 
import {MatRadioModule} from '@angular/material/radio';
import { MonacoEditorModule } from 'ngx-monaco-editor';




@NgModule({
  imports: [
    CommonModule,
    CodingExamRoutingModule,
    FormsModule,
    MatIconModule,
    MonacoEditorModule,
    AngularSplitModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MonacoEditorModule.forRoot(),
    CommonModule
  ],
  declarations: [
    CodingExamComponent,
    OptionCodingEditorComponent,
    DialogSubmitComponent
  ],
  providers: [
   
  ],
  bootstrap: [ CodingExamComponent],
})
export class CodingExamModule {}
