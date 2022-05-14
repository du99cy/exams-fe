import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpsModule } from '@shared/modules/https.module';
import { ContentIconPipe } from '@modules/course-video/pipes/content-icon.pipe';
import { ContentIconPipeDetail } from './pipe/content-icon.pipe';


@NgModule({
  imports: [
    CourseDetailRoutingModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    CommonModule,
    HttpsModule,
  ],
  declarations: [CourseDetailComponent,ContentIconPipeDetail],
})
export class CourseDetailModule {}
