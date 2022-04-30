import { Component, Input } from "@angular/core";
import { BaseComponent } from "@shared/abstract/base.component";
import { INotification } from "./model/interface";

@Component({
  selector: 'ex-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent extends BaseComponent{
  @Input() noti: INotification;
}
