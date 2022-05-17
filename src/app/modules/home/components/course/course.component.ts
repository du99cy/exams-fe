import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from '@modules/home/models/interface';
import { CartService } from '@modules/home/services/cart.service';
import { CourseService } from '@modules/home/services/course.service';
import { notiType } from '@modules/notification/model/enum';
import { INotification } from '@modules/notification/model/interface';
import { NotificationComponent } from '@modules/notification/notification.component';
import { NotificationService } from '@modules/notification/services/notification.service';
import { api_urls } from '@shared/configs/api_url';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CartService],
})
export class CourseComponent implements OnInit {
  like: boolean = false;
  dataSource: any;
  link = api_urls.LOCAL_API_URL;
  categoryList: Array<string> = [];
  noti: INotification = {
    type: notiType.success,
    message: 'Thêm mới thành công',
  };
  slides = [342, 453, 846, 855, 234, 564, 744, 243];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  constructor(
    private router: Router,
    private courseService: CourseService,
    private cartService: CartService,
    private notiService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.courseService.getCourseList().subscribe((data) => {
      this.dataSource = data.data;
      this.categoryList = Object.keys(this.dataSource);
      console.log(this.categoryList);
    });
  }

  goToDetail(_id: string) {
    this.router.navigateByUrl(`/course/${_id}`);
  }

  addToCart(course: ICourse) {
    this.cartService.addToCart(course);
    this.notiService.addNoti(this.noti);
    // this.createComponent();
  }

}