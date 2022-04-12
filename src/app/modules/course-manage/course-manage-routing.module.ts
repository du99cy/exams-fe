import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './modules/curriculum/components/curriculum/curriculum.component';
import { IntendedLearnersComponent } from './modules/intended-learners/intended-learners.component';
import { LayoutManageComponent } from './core/components/layout-manage/layout-manage.component'


const routes: Routes = [
  {
    path:'',
    component: LayoutManageComponent,
    children:[
      {
        path: 'intended-learners', // child route path
        loadChildren:() =>import('./modules/intended-learners/intended-learners.module').then(m=>m.IntendedLearnersModule)
      },
      {
        path: 'curriculum', // child route path
        loadChildren: () =>import('./modules/curriculum/curriculum.module').then(m=>m.CurriculumModule)
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
