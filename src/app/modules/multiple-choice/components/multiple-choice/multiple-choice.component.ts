import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseVideoService } from '@modules/course-video/services/course-video.service';
import { question } from '@modules/multiple-choice/models/question';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
  
})
export class MultipleChoiceComponent implements OnInit {
  favoriteSeason: string;
  questionList: any[];
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  pager = {
    index: 0,
    size: 1,
    count: 1,
  };
  constructor( private courseVideoService: CourseVideoService,
    private activateRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((queryParam)=>{
      this.courseVideoService.getQuestionByContentId(queryParam['content_id'],"preview").subscribe((res)=>{
        this.questionList =res.data
        console.log(this.questionList)
      })
    })
  }
  get filteredQuestions() {
    return this.questionList
      ? this.questionList.slice(this.pager.index, this.pager.index + this.pager.size)
      : [];
  }
  goTo(index: number) {
    this.pager.count = this.questionList.length;
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      
    }
  }

  updateStatusQuestion(value:any){
    console.log(value)
  }

}
