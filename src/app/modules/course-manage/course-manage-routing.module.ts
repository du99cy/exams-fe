import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntendedLearnersComponent } from './components/intended-learners/intended-learners.component';
import { LayoutManageComponent } from './components/layout-manage/layout-manage.component'


const routes: Routes = [
  {
    path:'',
    component: LayoutManageComponent,
    children:[
      {
        path: 'intended-learners', // child route path
        component: IntendedLearnersComponent, // child route component that the router renders
      },
  ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CourseManageRoutingModule {
}
