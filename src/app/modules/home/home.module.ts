import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpsModule } from '@shared/modules/https.module';
import { UserCourseComponent } from './components/user-course/user-course.component';
import { NotificationModule } from '@modules/notification/notification.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  imports: [
    HomeRoutingModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    HttpsModule,
    NotificationModule,
    SlickCarouselModule
  ],
  declarations: [CourseComponent, ListCoursesComponent, HomeComponent, UserCourseComponent],
})
export class HomeModule {}
