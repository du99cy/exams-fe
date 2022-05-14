import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { cannotSubmitExplainData } from './cannot-submit-explain-data';

@Component({
  selector: 'app-cannot-submit-for-review',
  templateUrl: 'cannot-submit-for-review.component.html',
  styleUrls: ['./cannot-submit-for-review.component.scss']
})
export class CannotSubmitForReviewComponent implements OnInit {
  cannotSubmitExplainData = cannotSubmitExplainData;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {


  }

}
