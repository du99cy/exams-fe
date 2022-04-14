import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'course-detail',
    loadChildren: () =>
      import('@modules/course-detail/course-detail.module').then(
        (m) => m.CourseDetailModule
      ),
  },
  {
    path: 'user-infor',
    loadChildren: () =>
      import('@modules/user-infor/user-infor.module').then(
        (m) => m.UserInforModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@modules/login/login.module').then((m) => m.loginModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('@modules/sign-up/sign-up.module').then((m) => m.signUpModule),
  },
  {
    path: 'confirm-token',
    loadChildren: () =>

      import('@modules/confirm-token/confirm-token.module').then(
        (m) => m.ConfirmTokenModule
      ),
  },
  {
    path: 'instructor',
    loadChildren: () =>
      import('@modules/instructor/instructor.module').then(
        (m) => m.InstructorModule
      ),
  },

  {
    path: 'test',
    loadChildren: () =>
      import('@modules/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'course/:course_id/contents',
    loadChildren: () =>
      import('@modules/course-video/course-video.module').then((m) => m.CourseVideoModule),
  },
  {
    path: 'course',
    loadChildren: () => import('@modules/course/course.module').then(m=>m.CourseModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
