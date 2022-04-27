import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorIconCodingExam'
})
export class ColorIconCodingExamPipe implements PipeTransform {

  transform(passed: boolean) {
    return passed?'greenyellow':'red'
  }

}
