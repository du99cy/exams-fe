import { Component, OnInit } from '@angular/core';
import { question } from '@modules/multiple-choice/models/question';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnInit {
  favoriteSeason: string;
  data: any[];
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  pager = {
    index: 0,
    size: 1,
    count: 1,
  };
  constructor() {
    this.data = question
  }

  ngOnInit(): void {
  }
  get filteredQuestions() {
    return this.data
      ? this.data.slice(this.pager.index, this.pager.index + this.pager.size)
      : [];
  }
  goTo(index: number) {
    this.pager.count = this.data.length;
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      
    }
  }

  updateStatusQuestion(value:any){
    console.log(value)
  }

}
