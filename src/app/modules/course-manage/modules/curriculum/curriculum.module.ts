import { NgModule } from '@angular/core';
import { HeaderContentLayoutModule } from '@modules/course-manage/core/modules/header-content-layout.module';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './components/lecture/lecture.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditorModule } from '@shared/modules/editor.module';
import { LectureCreationComponent } from './components/lecture-creation/lecture-creation.component';

@NgModule({
  imports: [
    CurriculumRoutingModule,
    HeaderContentLayoutModule,
    DragDropModule,
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    EditorModule,
  ],
  declarations: [
    CurriculumComponent,
    LectureComponent,
    LectureCreationComponent,
  ],
})
export class CurriculumModule {}
