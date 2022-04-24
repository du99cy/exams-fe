import { NgModule } from '@angular/core';
import { CourseVideoRoutingModule } from './course-video-routing.module';
import { CourseVideoComponent } from './components/course-video/course-video.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CurriculumService } from '@modules/course-manage/modules/curriculum/services/curriculum.service';
import { CommonModule } from '@angular/common';
import { CourseVideoService } from './services/course-video.service';
import { ContentIconPipe } from './pipes/content-icon.pipe';
@NgModule({
  imports: [
    CourseVideoRoutingModule,
    MatTabsModule,
    MatCardModule,
    CommonModule,
  ],
  declarations: [CourseVideoComponent,ContentIconPipe],
  providers: [CurriculumService,CourseVideoService],
})
export class CourseVideoModule {}
