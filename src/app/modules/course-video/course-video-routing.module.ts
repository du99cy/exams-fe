import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseVideoComponent } from './components/course-video/course-video.component';



const routes: Routes = [
  {
    path:'',
    component: CourseVideoComponent ,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CourseVideoRoutingModule {
}
