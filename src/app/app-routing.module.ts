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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
