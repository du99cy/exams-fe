import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconCodingExam',
})
export class IconCodingExamPipe implements PipeTransform {
  transform(passed: boolean) {
    return passed ? `check_circle_outline` : `cancel`;
  }
}
