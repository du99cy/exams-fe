import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intended-learners',
  templateUrl: './intended-learners.component.html',
  styleUrls: ['./intended-learners.component.scss']
})
export class IntendedLearnersComponent implements OnInit {
  numbers = [
    'Ví dụ: Xác định vai trò và trách nhiệm của người quản lý dự án',
    'Ví dụ: Ước tính tiến độ và ngân sách của dự án',
    'Ví dụ: Xác định và quản lý rủi ro dự án',
    'Ví dụ: Hoàn thành một nghiên cứu điển hình để quản lý một dự án từ khi hình thành đến khi hoàn thành'
  ];
  requirements = [
    'Ví dụ: Không cần kinh nghiệm lập trình. Bạn sẽ học mọi thứ bạn cần biết',
  ];
  people=[
    'Ví dụ: Các nhà phát triển Python mới bắt đầu tò mò về khoa học dữ liệu'
  ]
  drop(event: CdkDragDrop<unknown>) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }

  /**
   * Predicate function that only allows even numbers to be
   * sorted into even indices and odd numbers at odd indices.
   */
 
  constructor() { }

  ngOnInit(): void {
  }

}
