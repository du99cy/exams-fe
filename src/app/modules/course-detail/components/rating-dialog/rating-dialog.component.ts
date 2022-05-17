import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating-dialog',
  templateUrl: './rating-dialog.component.html',
  styleUrls: ['./rating-dialog.component.scss']
})
export class RatingDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
