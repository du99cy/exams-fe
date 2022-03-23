import { NgModule } from '@angular/core';
import { InstructorCourseComponent } from './components/instructor-course/instructor-course.component';
import { CreateCourseRoutingModule } from './create-course-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [ CreateCourseRoutingModule,MatIconModule ,MatProgressBarModule],
  declarations: [  
    InstructorCourseComponent
  ],
})
export class CreateCourseModule { }
