import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmTokenComponent } from './components/confirm-token/confirm-token.component';


const routes: Routes = [
  {
    path: ':id',
    component:ConfirmTokenComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ConfirmTokenRoutingModule {
}
