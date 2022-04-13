import { NgModule } from '@angular/core';
import { HeaderContentLayoutModule } from '@modules/course-manage/core/modules/header-content-layout.module';
import { IntendedLearnersRoutingModule } from './intended-learners-routing.module';
import { IntendedLearnersComponent } from './intended-learners.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [IntendedLearnersRoutingModule,HeaderContentLayoutModule,DragDropModule,CommonModule,MatIconModule],
  declarations: [IntendedLearnersComponent],
})
export class IntendedLearnersModule {}
