import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CartService } from '@modules/home/services/cart.service';
import { BaseComponent } from '@shared/abstract/base.component';

@Component({
  selector: 'ex-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent extends BaseComponent implements OnInit {
  title = 'Danh sách khóa học yêu thích';
  ratingForm: FormGroup;
  favourites = [
    {
      id: 'hd001',
      avatar: 'hoc_may_co_ban_va_ung_dung.png',
      ten_lop: 'Học máy cơ bản',
      author: 'Nguyễn Văn A',
      price: 400000,
    },
    {
      id: 'hd002',
      avatar: 'hoc_may_co_ban_va_ung_dung.png',
      ten_lop: 'Big Data',
      author: 'Trần Văn B',
      price: 350000,
    },
    {
      id: 'hd003',
      avatar: 'hoc_may_co_ban_va_ung_dung.png',
      ten_lop: 'Machine learning',
      author: 'Nguyễn Thị C',
      price: 234000,
    },
  ];
  noRecordMessage = 'Danh sách khóa học yêu thích của bạn đang rỗng!';
  constructor(private cartService: CartService, private fb: FormBuilder) {
    super();
  }
  ngOnInit(){
    this.build();
  }
  build() {
    this.ratingForm = this.fb.group({
      rating: 3.5
    });
  }
  test() {
    console.log('test', this.ratingForm);
  }
  remove(id: string) {}
  addToCart(course: any) {
    this.cartService.addToCart(course);
  }
}
