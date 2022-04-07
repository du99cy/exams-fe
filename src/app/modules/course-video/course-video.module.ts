import { NgModule } from '@angular/core';
import { CourseVideoRoutingModule } from './course-video-routing.module';
import { CourseVideoComponent } from './components/course-video/course-video.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  imports: [CourseVideoRoutingModule,MatTabsModule,MatExpansionModule],
  declarations: [CourseVideoComponent],
})
export class CourseVideoModule {}
