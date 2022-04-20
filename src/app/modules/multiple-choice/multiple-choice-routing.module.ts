import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';


const routes: Routes = [
  {
    path: '',
    component:MultipleChoiceComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MultipleChoiceRoutingModule {
}
