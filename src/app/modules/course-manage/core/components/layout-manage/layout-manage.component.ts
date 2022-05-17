import {
  Component,
  Inject,
  InjectionToken,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { routeParamFactory } from '@core/utilities/activated-route.factories';
import { CourseCreationService } from '@modules/new-course-creation/services/course-creation.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CannotSubmitForReviewComponent } from '../cannot-submit-for-review-notifacation-dialog/cannot-submit-for-review.component';



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
    CourseCreationService,
  ],
})
export class LayoutManageComponent implements OnInit, OnDestroy {
  currentTab:any = {courseStructure:false,intendedLearners:false,pricing:false, courseLandingPage:false,curriculum:false,filmEdit:false,setupTest:false}
  destroy$ = new Subject<boolean>();
  courseId: string;
  constructor(
    @Inject(APP_SOME_ID) private id$: Observable<string>,
    private CourseService: CourseCreationService,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id$.pipe(takeUntil(this.destroy$)).subscribe((id) => {
      this.courseId = id;
    });
    console.log(this.router.url);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  review() {
    this.CourseService.CourseReview(this.courseId).subscribe((lst:any[]) => {
      if(lst.length >0 )
        this.openDialog({data:lst,courseId:this.courseId})
      else
        this.router.navigateByUrl(`/course/${this.courseId}?mode=preview`)
    });
  }

  openDialog(data: any) {
    this.dialog.open(CannotSubmitForReviewComponent, {
      data: data,
      width: '40rem',
    });
  }

  clickToTab(tabName:string){
    for(const t in this.currentTab){
      this.currentTab[t] = t== tabName
    }
  }
}
