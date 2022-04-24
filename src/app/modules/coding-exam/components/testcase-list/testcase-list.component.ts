import { Component, Input, OnInit } from '@angular/core';
import { TestcaseCheck } from '@modules/coding-exam/models/testcase-check';




@Component({
  selector: 'app-testcast-list-coding',
  templateUrl: './testcase-list.component.html',
  styleUrls: ['./testcase-list.component.scss']
})
export class TestcaseListComponent implements OnInit {
  @Input('testcases') testcases:Array<TestcaseCheck>
  constructor() { }

  ngOnInit()  {

  }

  trackBy(index: number, item:any){
    return item.id
  }
  // ngOnChanges(): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   console.log(this.testcases)
  // }

}
