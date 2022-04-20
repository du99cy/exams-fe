import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-submit',
  templateUrl: './dialog-submit.component.html',
  styleUrls: ['./dialog-submit.component.scss']
})
export class DialogSubmitComponent implements OnInit {

  constructor(
    public dialogRefSub: MatDialogRef<DialogSubmitComponent>,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    console.log('This is init method');
  }
  alertWithSuccess() {
    Swal.fire(
      'Bạn đã hoàn thành bài thi!',
      'You submitted succesfully!',
      'success'
    );
  }
}
