import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseVideoService } from '@modules/course-video/services/course-video.service';

@Component({
  selector: 'app-history-dialog',
  templateUrl: './history-dialog.component.html',
  styleUrls: ['./history-dialog.component.scss'],
})
export class HistoryDialogComponent implements OnInit {
  historyQuestion: any;
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  constructor(
    private courseVideoService: CourseVideoService,
    public dialogRef: MatDialogRef<HistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getHistoryQuestion(this.data);
  }
  getHistoryQuestion(content_id: any) {
    this.courseVideoService.getHistory(content_id).subscribe((res) => {
      this.historyQuestion = res;
    });
  }
  goToDetail() {
    this.router.navigate([`./${this.data}/quiz`]);
  }
}
