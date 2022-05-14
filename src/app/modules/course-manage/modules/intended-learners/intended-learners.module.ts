import { NgModule } from '@angular/core';
import { HeaderContentLayoutModule } from '@modules/course-manage/core/modules/header-content-layout.module';
import { IntendedLearnersRoutingModule } from './intended-learners-routing.module';
import { IntendedLearnersComponent } from './intended-learners.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CourseCreationService } from '@modules/new-course-creation/services/course-creation.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IntendedLearnersRoutingModule,
    HeaderContentLayoutModule,
    DragDropModule,
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  declarations: [IntendedLearnersComponent],
  // providers:[CourseCreationService]
})
export class IntendedLearnersModule {}
