import {
  Component,
  Inject,
  InjectionToken,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { routeParamFactory } from '@core/utilities/activated-route.factories';
import { Course } from '@modules/new-course-creation/models/course';
import { CourseCreationService } from '@modules/new-course-creation/services/course-creation.service';
import { api_urls } from '@shared/configs/api_url';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CurriculumService } from '../curriculum/services/curriculum.service';

const APP_SOME_ID = new InjectionToken<Observable<string>>('stream id');
@Component({
  selector: 'app-course-landing-page',
  templateUrl: './course-landing-page.component.html',
  styleUrls: ['./course-landing-page.component.scss'],
  providers: [
    {
      provide: APP_SOME_ID,
      useFactory: routeParamFactory('newCourseId'),
      deps: [ActivatedRoute],
    },
    CourseCreationService,
    CurriculumService,
  ],
})
export class CourseLandingPageComponent implements OnInit, OnDestroy {
  //make this variable for event detect change of form

  changeFormNumber: number = 0;
  isChange: boolean = false;
  getCourseInforMode: string = 'course-landing-page';
  destroy$ = new Subject<boolean>();
  img: string;
  imgName: string;
  courseId: string;
  formGroup: FormGroup;
  attributes = {
    title: new FormControl(''),
    teaching_language: new FormControl('tiếng việt'),
    description: new FormControl(''),
    category: new FormControl(''),
  };

  teachingLanguage: Array<string> = ['tiếng anh', 'tiếng việt', 'khác'];
  course_categories = [
    'Front End',
    'Back End',
    'NLP',
    'CV',
    'Full Stack',
    'Dev OPs',
  ];
  constructor(
    @Inject(APP_SOME_ID) private id$: Observable<string>,
    private fb: FormBuilder,
    private courseService: CourseCreationService,
    private curriculumService: CurriculumService
  ) {}

  ngOnInit(): void {
    //initialize form group
    this.formGroup = this.fb.group(this.attributes);
    //get course id
    this.id$
      .pipe(takeUntil(this.destroy$))
      .subscribe((courseId) => (this.courseId = courseId));
    //get information
    this.getCourseInfor();
    //trace changing of form
    this.formGroup.valueChanges.subscribe((rel) => {
      //when subscribe we will get a result but form have changed Nothing
      //so if number >0 mean that form have changed
      if (this.changeFormNumber > 0) this.isChange = true;
      this.changeFormNumber += 1;
    });
  }
  ngOnDestroy() {
    //save status of data into database
    if (this.isChange) {
      let courseBodyUpdate: Course = { ...this.FormValue };
      this.courseService
        .updateCourse(this.courseId, courseBodyUpdate)
        .subscribe();
    }

    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getCourseInfor() {
    this.courseService
      .getCourseInfor(this.courseId, this.getCourseInforMode)
      .subscribe((res: any) => {
        this.formGroup.patchValue({
          title: res?.title,
          description: res?.description,
          category: res?.category,
          teaching_language: res?.teaching_language,
        });

        this.img = res.img ? `${api_urls.LOCAL_API_URL}/${res?.img}` : null;
        this.imgName = res.img_name ? res.img_name : null;
      });
  }

  get FormValue() {
    return this.formGroup.value;
  }

  getFile(event: any) {
    this.curriculumService.uploadFile(event.file, 'public').subscribe((res) => {
      let img = res.data.file;
      //update to database
      let courseBodyUpdate: Course = { img: img, img_name: event.imgName };
      this.courseService
        .updateCourse(this.courseId, courseBodyUpdate)
        .subscribe((res) => {
          alert('Cập nhật thành công');
        });
    });
  }
}
