import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './components/change-pas/change-pas.component';



const routes: Routes = [
  {
    path: '',
    component: ChangePassComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ChangePassRoutingModule {
}
