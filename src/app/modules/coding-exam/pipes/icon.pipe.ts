import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconCodingExam',
})
export class IconCodingExamPipe implements PipeTransform {
  transform(passed: boolean) {
    return passed
      ? `<i class="material-icons" style="color: greenyellow">check_circle_outline</i>`
      : `<i class="material-icons" style="color:red">cancel</i>`;
  }
}
