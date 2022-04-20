import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-creation',
  templateUrl: './quiz-creation.component.html',
  styleUrls: ['./quiz-creation.component.scss']
})
export class QuizCreationComponent implements OnInit {

  @Output('btn-click') btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  btnClickHandler(status:number,data:string=''){
    //status 0:cancel,1:save
    this.btnClick.emit({status:status,data:data});

  }

}
