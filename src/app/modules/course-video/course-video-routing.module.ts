import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseVideoComponent } from './components/course-video/course-video.component';



const routes: Routes = [
  {
    path:'',
    component: CourseVideoComponent ,
    pathMatch: 'full'
  },
  {
    path:':content_id/coding',
    loadChildren: () => import('@modules/coding-exam/coding-exam.module').then(m=>m.CodingExamModule)
  },
  {
    path:':content_id/quiz',
    loadChildren: () => import('@modules/multiple-choice/multiple-choice.module').then(m=>m.MultipleChoiceModule)
  }

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CourseVideoRoutingModule {
}
