import { NgModule } from '@angular/core';
import { CourseVideoRoutingModule } from './course-video-routing.module';
import { CourseVideoComponent } from './components/course-video/course-video.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CurriculumService } from '@modules/course-manage/modules/curriculum/services/curriculum.service';
import { CommonModule } from '@angular/common';
import { CourseVideoService } from './services/course-video.service';
import { ContentIconPipe } from './pipes/content-icon.pipe';
import { CommentComponent } from './components/comment/comment.component';
@NgModule({
  imports: [
    CourseVideoRoutingModule,
    MatTabsModule,
    MatCardModule,
    CommonModule,
  ],
  declarations: [CourseVideoComponent,ContentIconPipe, CommentComponent],
  providers: [CurriculumService,CourseVideoService],
})
export class CourseVideoModule {}
