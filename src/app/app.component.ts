import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { notiType } from '@modules/notification/model/enum';
import { INotification } from '@modules/notification/model/interface';
import { NotificationComponent } from '@modules/notification/notification.component';
import { NotificationService } from '@modules/notification/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exams-fe';
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  VCR: ViewContainerRef;
  constructor(
    private CFR: ComponentFactoryResolver,
    private notiService: NotificationService){
      this.notiService.noti$.subscribe((noti) => {
        this.createComponent(noti);
      })
    }

  createComponent(noti: INotification) {
    let componentFactory = this.CFR.resolveComponentFactory(
      NotificationComponent
    );

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.noti = noti
    setTimeout(() => {
      this.remove();
    }, 2900);
  }
  remove() {
    if (this.VCR.length < 1) return;
    this.VCR.remove(0);
  }
}
