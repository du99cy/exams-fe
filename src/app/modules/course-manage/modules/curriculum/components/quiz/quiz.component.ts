import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../../models/content';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input('order') order: number = 0;
  @Input('title') title: string = 'Introduction';
  @Input('content-id') content_id: string = '';
  @Input('course-id') course_id: string;

  @Input('description') description: string;
  descriptionUploadPress: boolean;
  

  constructor(private curriculumService: CurriculumService) {}

  ngOnInit() {}

  editorClickHandler(event: any): void {
    if (event.name == 'save') {
      this.description = event.data
      let contentBodyUpdate: Content = { description: event.data };

      //update to database
      this.curriculumService
        .updateContent(this.content_id, contentBodyUpdate)
        .subscribe((res) => {
          console.log(res);
        });
    }

    this.descriptionUploadPress = false;
  }
  

  
  trackByFn(index:number,item:any){
    return item.id;
  }
  
}
