import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseDetailRoutingModule } from './course-detail-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [ CourseDetailRoutingModule,MatIconModule,MatExpansionModule ],
  declarations: [  
     CourseDetailComponent,
  ],
})
export class CourseDetailModule { }
