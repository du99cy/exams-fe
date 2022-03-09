import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';


const routes: Routes = [
  {
    path:'',
    component: CourseDetailComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CourseDetailRoutingModule {
}
