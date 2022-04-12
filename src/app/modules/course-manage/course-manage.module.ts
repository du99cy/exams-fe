import { NgModule } from '@angular/core';

import { CourseManageRoutingModule } from './course-manage-routing.module';
import { LayoutManageComponent } from './core/components/layout-manage/layout-manage.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CourseManageRoutingModule, MatIconModule],
  declarations: [LayoutManageComponent],
})
export class CourseManageModule {}
