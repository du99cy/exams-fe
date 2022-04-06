import { NgModule } from '@angular/core';
import { CourseLandingPageComponent } from './components/course-landing-page/course-landing-page.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { IntendedLearnersComponent } from './components/intended-learners/intended-learners.component';

import { PricingComponent } from './components/pricing/pricing.component';
import { CourseManageRoutingModule } from './course-manage-routing.module';
import { LayoutManageComponent } from './components/layout-manage/layout-manage.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [ CourseManageRoutingModule, MatIconModule ],
  declarations: [ CourseLandingPageComponent,CurriculumComponent ,IntendedLearnersComponent,PricingComponent, LayoutManageComponent],
})
export class CourseManageModule { }
