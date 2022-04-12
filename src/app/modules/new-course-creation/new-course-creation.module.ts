import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sharedTestModule } from '@shared/modules/test.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NewCourseCreationRoutingModule } from './new-course-creation-routing.module';
import {MatStepperModule} from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    NewCourseCreationRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [LayoutComponent],
})
export class NewCourseCreationModule {}
