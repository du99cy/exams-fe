import { Component, Input, OnInit } from '@angular/core';
import { CourseComponent } from '@modules/home/components/course/course.component';
import { BaseComponent } from '@shared/abstract/base.component';
import { notiType } from './model/enum';
import { INotification } from './model/interface';

@Component({
  selector: 'ex-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent extends BaseComponent {
  noti: INotification = {message: 'test', type: notiType.success}
}
