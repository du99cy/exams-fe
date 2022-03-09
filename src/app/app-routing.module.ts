import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:()=> import('../../src/app/modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'course-detail',
    loadChildren:()=> import('../../src/app/modules/course-detail/course-detail.module').then(m=>m.CourseDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
