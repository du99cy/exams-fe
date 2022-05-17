import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-option-coding-editor',
  templateUrl: './option-coding-editor.component.html',
  styleUrls: ['./option-coding-editor.component.scss']
})
export class OptionCodingEditorComponent implements OnInit {
  fg: any;
  list_language = ['python', 'java'];
  list_theme = ['vs-light', 'vs-dark'];
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<OptionCodingEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fg = fb.group({
      theme: new FormControl(data.theme, [Validators.required]),
      language: new FormControl(data.language, [Validators.required]),
    });
}
  ngOnInit(): void {
   
  }
chooseOption() {
  let data = this.fg.value;
  this.dialogRef.close(data);
}
}

