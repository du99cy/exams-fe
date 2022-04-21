import { NgModule } from '@angular/core';
import { MultipleChoiceRoutingModule } from './multiple-choice-routing.module';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseVideoService } from '@modules/course-video/services/course-video.service';
import { ChangeColorPipe } from './pipes/change-color.pipe';

@NgModule({
  imports: [
    MultipleChoiceRoutingModule,
    MatRadioModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [MultipleChoiceComponent, ChangeColorPipe],
  providers: [CourseVideoService],
})
export class MultipleChoiceModule {}
