import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpsModule } from '@shared/modules/https.module';
import { ContentIconPipe } from '@modules/course-video/pipes/content-icon.pipe';
import { ContentIconPipeDetail } from './pipe/content-icon.pipe';
import { RatingDialogComponent } from './components/rating-dialog/rating-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxStarRatingModule } from 'ngx-star-rating';





@NgModule({
  imports: [
    CourseDetailRoutingModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    CommonModule,
    HttpsModule,
    MatDialogModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
  ],
  declarations: [CourseDetailComponent,ContentIconPipeDetail, RatingDialogComponent],
})
export class CourseDetailModule {}
