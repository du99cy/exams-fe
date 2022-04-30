import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from '@modules/home/models/interface';
import { CartService } from '@modules/home/services/cart.service';
import { CourseService } from '@modules/home/services/course.service';
import { notiType } from '@modules/notification/model/enum';
import { INotification } from '@modules/notification/model/interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CartService],
})
export class CourseComponent implements OnInit {
  like: boolean = false;
  dataSource: any;
  noti: INotification;
  constructor(
    private router: Router,
    private courseService: CourseService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.courseService.getClassList().subscribe((data) => {
      this.dataSource = data;
    });
  }

  goToDetail(_id: string) {
    this.router.navigateByUrl(`/course-detail/${_id}`);
    console.log(_id);
  }

  addToCart(course: ICourse) {
    this.cartService.addToCart(course)
    this.noti = {
      type: notiType.success,
      message: 'Thêm mới thành công!',
    };
    setTimeout(() => {
      this.noti = undefined;
    }, 2000);
  }
}
