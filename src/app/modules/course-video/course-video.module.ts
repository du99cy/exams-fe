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
import {MatInputModule} from '@angular/material/input';
import { HistoryDialogComponent } from './components/history-dialog/history-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    CourseVideoRoutingModule,
    MatTabsModule,
    MatCardModule,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [CourseVideoComponent,ContentIconPipe, CommentComponent, HistoryDialogComponent,],
  providers: [CurriculumService,CourseVideoService],
})
export class CourseVideoModule {}
