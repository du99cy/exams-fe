import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ HomeRoutingModule ,MatIconModule,FormsModule,CommonModule],
  declarations: [  
    CourseComponent, ListCoursesComponent, HomeComponent
  ],
})
export class HomeModule { }