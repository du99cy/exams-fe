import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorCourseComponent } from './components/instructor-course/instructor-course.component';


const routes: Routes = [
  {
    path:'',
    component: InstructorCourseComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CreateCourseRoutingModule {
}
