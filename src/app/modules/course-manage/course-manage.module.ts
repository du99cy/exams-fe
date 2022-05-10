import { NgModule } from '@angular/core';

import { CourseManageRoutingModule } from './course-manage-routing.module';
import { LayoutManageComponent } from './core/components/layout-manage/layout-manage.component';
import { MatIconModule } from '@angular/material/icon';
import { CourseStructureComponent } from './modules/course-structure/course-structure.component';
import { SetupTestComponent } from './modules/setup-test/setup-test.component';
import { CourseMessagesComponent } from './modules/course-messages/course-messages.component';
import { FilmEditComponent } from './modules/film-edit/film-edit.component';
import { HeaderContentLayoutModule } from './core/modules/header-content-layout.module';
import { PricingComponent } from './modules/pricing/pricing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CourseManageRoutingModule,
    MatIconModule,
    HeaderContentLayoutModule,
    FormsModule
  ],
  declarations: [
    LayoutManageComponent,
    CourseStructureComponent,
    SetupTestComponent,
    CourseMessagesComponent,
    FilmEditComponent,
    PricingComponent,
  ],
})
export class CourseManageModule {}
