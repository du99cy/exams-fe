import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '@modules/course-manage/modules/curriculum/models/question';

import { CourseVideoService } from '@modules/course-video/services/course-video.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnInit {
  favoriteSeason: string;
  questionListObservable: Observable<Array<Question>>

  pager = {
    index: 0,
    size: 1,
    count: 1,
  };
  constructor(
    private courseVideoService: CourseVideoService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.questionListObservable =
        this.courseVideoService.getQuestionByContentId(
          params['content_id'],
          'preview'
        );
    });
  }
  filteredQuestions(questionList: Array<Question>): Array<Question> {
    return questionList
      ? questionList.slice(this.pager.index, this.pager.index + this.pager.size)
      : [];
  }
  goTo(questionList: Array<Question>, index: number) {
    this.pager.count = questionList.length;
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
    }
  }

  updateStatusQuestion(value: any) {
    console.log(value);
  }

  chooseAnswer(question: Question, optionId: string) {
    console.log(question);
    let option_exists = question.answers_of_student.includes(optionId);
    if (question.question_type == 'radio') {
      if (!option_exists) {
        question.answers_of_student.pop();
        question.answers_of_student.push(optionId);
      }
    } else {
      if (!option_exists) {
        question.answers_of_student.push(optionId);
      } else {
        question.answers_of_student = question.answers_of_student.filter(
          (ans) => ans != optionId
        );
      }
    }
  }
}
