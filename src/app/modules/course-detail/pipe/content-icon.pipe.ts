import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'content_icon'
})
export class ContentIconPipeDetail implements PipeTransform {

  transform(content_type:number) {
    if(content_type == 0)
      return "play_circle_outline"
    if(content_type == 1)
      return "assignment"
    return 'code'
  }

}
