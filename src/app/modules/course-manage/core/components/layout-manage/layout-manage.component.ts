import {
  Component,
  Inject,
  InjectionToken,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeParamFactory } from '@core/utilities/activated-route.factories';
import { CourseCreationService } from '@modules/new-course-creation/services/course-creation.service';
import { Observable, Subject, takeUntil } from 'rxjs';

const APP_SOME_ID = new InjectionToken<Observable<string>>('stream some id');
@Component({
  selector: 'app-layout-manage',
  templateUrl: './layout-manage.component.html',
  styleUrls: ['./layout-manage.component.scss'],
  providers: [
    {
      provide: APP_SOME_ID,
      useFactory: routeParamFactory('newCourseId'),
      deps: [ActivatedRoute],
    },
    CourseCreationService
  ],
})
export class LayoutManageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<boolean>();
  courseId: string
  constructor(@Inject(APP_SOME_ID) private id$: Observable<string>,private CourseService: CourseCreationService) {}

  ngOnInit(): void {
    this.id$.pipe(takeUntil(this.destroy$)).subscribe((id) => {
      this.courseId = id
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  review() {
    this.CourseService.CourseReview(this.courseId).subscribe(res => {console.log(res)})
  }
}
