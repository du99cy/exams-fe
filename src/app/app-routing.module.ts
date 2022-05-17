import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'course',
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
    path: 'courses',
    pathMatch: 'full',
    loadChildren: () =>
      import('@modules/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'course/:course_id/contents',
    loadChildren: () =>
      import('@modules/course-video/course-video.module').then(
        (m) => m.CourseVideoModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('@modules/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('@modules/checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'recharge',
    loadChildren: () =>
      import('@modules/recharge/recharge.module').then((m) => m.RechargeModule),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('@modules/transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
  {
    path: 'favourite',
    loadChildren: () =>
      import('@modules/favourite/favourite.module').then(
        (m) => m.FavouriteModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('@modules/order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
