import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
import { Question, QuestionPostOfUser } from '@modules/course-manage/modules/curriculum/models/question';

import { CourseVideoService } from '@modules/course-video/services/course-video.service';
import { MultipleChoiceService } from '@modules/multiple-choice/services/multiple-choice.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnInit {
  //mode for exam or view history exam
  mode:string = 'exam'
  contentId:string= ''
  favoriteSeason: string;
  questionListObservable: Observable<Array<Question>>
  userInfor:any
  //if finishExam
  score = ""
  pager = {
    index: 0,
    size: 1,
    count: 1,
  };
  constructor(
    private courseVideoService: CourseVideoService,
    private activateRoute: ActivatedRoute,
    private AuthService: AuthService,
    private MultipleChoiceService: MultipleChoiceService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.contentId =  params['content_id']
      this.questionListObservable =
        this.courseVideoService.getQuestionByContentId(
         this.contentId,
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

  finishExam(questionList: Question[]){
    let questionListToPost :QuestionPostOfUser[] = this.convertQuestionDatatoPost(questionList);
    this.MultipleChoiceService.postMultipleChoiceExam(this.contentId,questionListToPost).subscribe((res:any)=>{

      this.mergeListQuestionWithRightAnswer(questionList,res.right_answer_id_of_question_data_list)
      this.mode =res.mode;

      this.score = res.score

    })


  }

  convertQuestionDatatoPost(questionList: Question[]){
    let arr =[]
    for(let qs of questionList){
      let new_qs:QuestionPostOfUser = <QuestionPostOfUser>{
        id:qs.id,
        answers_of_student: qs.answers_of_student,
      }
      arr.push(new_qs)
    }
    return arr
  }

  mergeListQuestionWithRightAnswer(questionList:Question[],listMergeTo:any[])
  {
    for (let question of questionList){
      let questionMerge = listMergeTo.find(q => q.id == question.id)
      question.answers_right_id = questionMerge.answers_right_id
    }

  }
}
