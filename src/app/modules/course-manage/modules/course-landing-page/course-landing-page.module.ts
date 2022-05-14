import { NgModule } from '@angular/core';
import { HeaderContentLayoutModule } from '@modules/course-manage/core/modules/header-content-layout.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CourseLandingPageComponent } from './course-landing-page.component';
import { CourseLandingPageRoutingModule } from './course-landing-page-routing.module';
import { EditorModule } from '@shared/modules/editor.module';
import { CropperImageModule } from '@shared/modules/cropper-image.module';
import { NormalEditorModule } from '@shared/modules/normal-editor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HeaderContentLayoutModule,
    DragDropModule,
    CommonModule,
    MatIconModule,
    CourseLandingPageRoutingModule,
    EditorModule,
    CropperImageModule,
    NormalEditorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CourseLandingPageComponent],
})
export class CourseLandingPageModule {}
