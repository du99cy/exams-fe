import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CourseDetailRoutingModule,MatIconModule,MatExpansionModule,FormsModule,
    CommonModule, ],
  declarations: [  
     CourseDetailComponent,
  ],
})
export class CourseDetailModule { }
