import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-creation',
  templateUrl: './exercise-creation.component.html',
  styleUrls: ['./exercise-creation.component.scss']
})
export class ExerciseCreationComponent implements OnInit {
  @Input("title-creation") titleCreation:string
  @Output('btn-click') btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  btnClickHandler(status:number,data:string=''){
    //status 0:cancel,1:save
    this.btnClick.emit({status:status,data:data});

  }

}
