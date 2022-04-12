import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorCourseComponent } from '../instructor/components/instructor-course/instructor-course.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorCourseComponent,
    pathMatch: 'full',
  },
  {
    path: ':newCourseId/course-creation',
    loadChildren: () =>
      import('@modules/new-course-creation/new-course-creation.module').then(
        (m) => m.NewCourseCreationModule
      ),
  },
  {
    path: ':newCourseId/manage',
    loadChildren: () =>
      import('@modules/course-manage/course-manage.module').then(
        (m) => m.CourseManageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorRoutingModule {}
