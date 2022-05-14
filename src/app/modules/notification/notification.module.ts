import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotificationComponent } from "./notification.component";
import { NotificationService } from "./services/notification.service";

@NgModule({
  imports: [CommonModule],
  declarations: [NotificationComponent],
  providers: [],
  exports: [NotificationComponent]
})
export class NotificationModule{}
