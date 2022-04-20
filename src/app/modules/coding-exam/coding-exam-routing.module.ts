import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingExamComponent } from './components/coding-exam/coding-exam.component';


const routes: Routes = [
  {
    path:'',
    component:CodingExamComponent,
    pathMatch:'full',
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CodingExamRoutingModule {
}
