import { NgModule } from '@angular/core';
import { MultipleChoiceRoutingModule } from './multiple-choice-routing.module';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ MultipleChoiceRoutingModule,MatRadioModule, FormsModule, CommonModule ],
  declarations: [
    MultipleChoiceComponent
  ],
})
export class MultipleChoiceModule { }
