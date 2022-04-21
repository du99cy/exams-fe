import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding-creation',
  templateUrl: './coding-creation.component.html',
  styleUrls: ['./coding-creation.component.scss']
})
export class CodingCreationComponent implements OnInit {
  inputParameter=false
  showBtnInput =true
  showBtnTest =true
  showTestCasse = false;
  ngOnInit(): void {
    
  }
  addInput(){
    this.showBtnInput = false
    this.showTestCasse =true
  }
  addTestCase(){
    this.showBtnTest = false
    this.showTestCasse =true
  }
}
