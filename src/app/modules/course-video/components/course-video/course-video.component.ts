import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Content } from '@modules/course-manage/modules/curriculum/models/content';
import { CurriculumService } from '@modules/course-manage/modules/curriculum/services/curriculum.service';
import { CourseVideoService } from '@modules/course-video/services/course-video.service';
import { content } from '@modules/home/models/content';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ResourseFile } from '@modules/course-manage/modules/curriculum/models/ResourseFile';
import { MatDialog } from '@angular/material/dialog';
import { HistoryDialogComponent } from '../history-dialog/history-dialog.component';

@Component({
  selector: 'app-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.scss'],
})
export class CourseVideoComponent implements OnInit, OnDestroy {
  description: string;
  videoURL: SafeUrl;
  video: Blob;
  urlObject: string;

  course_id: string;
  //whether preview or real studying
  mode: string;
  fileResourses:Array<ResourseFile>=[]
  ContentsObservable: Observable<Array<Content>>;
  constructor(
    private route: ActivatedRoute,
    private curriculumService: CurriculumService,
    private courseVideoService: CourseVideoService,
    private sanitizer: DomSanitizer,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //get course id from url
    this.route.params.subscribe((params) => {
      this.course_id = params['course_id'];

      //get model
      this.route.queryParams.subscribe((queryParams) => {
        this.mode = queryParams['mode'];
      });

      //get all content of this course
      this.ContentsObservable = this.curriculumService.getAllContentViaCourseId(
        this.course_id
      );
    });
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  getDetailContent(content: Content) {
    //if lecture
    if (content.type_status == 0) {
      this.description = content.description;
      this.courseVideoService
        .getVideoViaContentId(content.id, this.mode)
        .subscribe((video) => {
          this.video = video;
          this.urlObject = URL.createObjectURL(this.video);
          this.videoURL = this.sanitizer.bypassSecurityTrustUrl(this.urlObject);
        });

      //get file resourse
      this.curriculumService.getAllResourseViaContentIdAndResourseType(content.id,"file",this.mode).subscribe(res=>{
        this.fileResourses = res
      })

    }
    //if quiz
    if(content.type_status == 1){
      this.router.navigate([`./${content.id}/quiz`],{relativeTo:this.route})
    }
    //if coding
    if(content.type_status == 2)
      this.router.navigate([`./${content.id}/coding`],{relativeTo:this.route})
  }
  ngOnDestroy() {
    URL.revokeObjectURL(this.urlObject);
  }
  downloadFile(resourse_id:string){
    this.curriculumService.getDownloadFile(resourse_id,this.mode).subscribe(file=>{

      let fileURL = URL.createObjectURL(file);

      window.open(fileURL)
    })
  }
  openDialog(content_id:any): void {
    const dialogRef = this.dialog.open(HistoryDialogComponent, {
      width: '500px',
      data:content_id
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
