import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lecture-creation',
  templateUrl: './lecture-creation.component.html',
  styleUrls: ['./lecture-creation.component.scss']
})
export class LectureCreationComponent implements OnInit {

  @Output('btn-click') btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  btnClickHandler(status:number,data:string=''){
    //status 0:cancel,1:save
    this.btnClick.emit({status:status,data:data});
  }

}
