import { Component, Input, OnInit } from '@angular/core';

import { CONFIG } from '@modules/course-manage/shared/config';
import { Content } from '../../models/content';
import { ResourseFile } from '../../models/ResourseFile';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss'],
})
export class LectureComponent implements OnInit {
  @Input('order') order: number = 0;
  @Input('title') title: string = 'Introduction';
  @Input('content-id') content_id: string = '';
  @Input('course-id') course_id: string;

  @Input('description') description: string;
  videoResourse: Array<ResourseFile> =[];
  fileResourse: Array<ResourseFile>=[];

  expandMorePress: boolean = false;
  videoUploadPress: boolean = false;
  descriptionUploadPress: boolean = false;
  resourseUploadPress: boolean = false;

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
  cancelUploadFileHandler(name: string) {
    if (name == 'video') {
      this.videoUploadPress = false;
    } else {
      this.resourseUploadPress = false;
    }
  }

  onSelectedFile(event: any, uploadType: string) {
    let file: File = event.target.files[0];
    //if that is video upload then can not exceed 4GB

    if (
      (uploadType == 'video' && file.size < CONFIG.FILE_UPLOAD_LIMIT) ||
      uploadType == 'resourse'
    ) {
      //upload file to database
      this.curriculumService.uploadFile(file).subscribe((res) => {
        let resourse: ResourseFile = {
          name: file.name,
          size: file.size,
          type_code: uploadType == 'video' ? 0 : 1,
          file: res.data.file,
          content_id: this.content_id,
          course_id: this.course_id,
        };

        //push to resourse array
        if(uploadType == 'video'){
          this.videoResourse.push(resourse)
          this.descriptionUploadPress  = false}
        else{
          this.fileResourse.push(resourse)
          this.resourseUploadPress = false
          }
        this.curriculumService.addResourse(resourse).subscribe()
      });
    }

  }

  getVideoAndFileResourses(){
    //lazy get video and file resourse
    this.curriculumService.getAllResourseViaContentId(this.content_id).subscribe(res=>{
      this.videoResourse = res.video_resourse_list;
      this.fileResourse = res.file_resourse_list;
    })
    this.expandMorePress = true
  }

  trackByFn(index:number,item:any){
    return item.id;
  }
}
