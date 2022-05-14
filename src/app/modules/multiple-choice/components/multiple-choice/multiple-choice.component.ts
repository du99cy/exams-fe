import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { Question } from '@modules/course-manage/modules/curriculum/models/question';

import { CourseVideoService } from '@modules/course-video/services/course-video.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnInit {
  //mode for exam or view history exam
  mode:string = 'exam'
  favoriteSeason: string;
  questionListObservable: Observable<Array<Question>>
  userInfor:any

  pager = {
    index: 0,
    size: 1,
    count: 1,
  };
  constructor(
    private courseVideoService: CourseVideoService,
    private activateRoute: ActivatedRoute,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.questionListObservable =
        this.courseVideoService.getQuestionByContentId(
          params['content_id'],
          'preview'
        );
    });

    this.userInfor = this.AuthService.User

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

  finishExam(){
    this.mode = 'view'
  }
}
