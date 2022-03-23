import { NgModule } from '@angular/core';
import { CourseLandingPageComponent } from './components/course-landing-page/course-landing-page.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { IntendedLearnersComponent } from './components/intended-learners/intended-learners.component';
import { ManageComponent } from './components/manage/manage.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { CourseManageRoutingModule } from './course-manage-routing.module';

@NgModule({
  imports: [ CourseManageRoutingModule ],
  declarations: [ CourseLandingPageComponent,CurriculumComponent ,IntendedLearnersComponent,ManageComponent,PricingComponent],
})
export class CourseManageModule { }
