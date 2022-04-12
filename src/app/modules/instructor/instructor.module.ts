import { NgModule } from '@angular/core';
import { InstructorCourseComponent } from './components/instructor-course/instructor-course.component';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InstructorRoutingModule } from './instructor-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    InstructorRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    CommonModule,
  ],
  declarations: [InstructorCourseComponent],
})
export class InstructorModule {}
