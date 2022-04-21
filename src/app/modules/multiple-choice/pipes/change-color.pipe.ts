import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '@modules/course-manage/modules/curriculum/models/question';

@Pipe({
  name: 'color'
})
export class ChangeColorPipe implements PipeTransform {

  transform(optionId:string,question:Question,mode:string) {
    if(mode == 'view'){
      if(question.answers_right_id.includes(optionId)){
        return 'greenyellow'
      }
      else{
        if(question.answers_of_student.includes(optionId)){
          return 'red'
        }
      }
    }
    return '#000'
  }

}
