import { Component, OnInit } from '@angular/core';
import { content } from '@modules/home/models/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data : any=[];
  constructor() {
    this.data= content
    console.log(this.data)
   }

  ngOnInit(): void {
    this.data= content
  }

}
