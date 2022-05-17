import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserCourseComponent } from './components/user-course/user-course.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
    {
      path: 'my-course', // child route path
      component: UserCourseComponent
    },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {
}
