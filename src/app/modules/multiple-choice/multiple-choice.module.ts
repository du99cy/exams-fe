import { NgModule } from '@angular/core';
import { MultipleChoiceRoutingModule } from './multiple-choice-routing.module';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';

@NgModule({
  imports: [ MultipleChoiceRoutingModule ],
  declarations: [
    MultipleChoiceComponent
  ],
})
export class MultipleChoiceModule { }
