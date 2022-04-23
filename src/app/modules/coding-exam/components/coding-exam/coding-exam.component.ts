
import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: `./coding-exam.component.html`,
  styleUrls: [`./coding-exam.component.scss`]
})
export class CodingExamComponent {
  fg: any;
  list_language = ['python', 'cpp', 'java'];
  list_theme = ['vs-light', 'vs-dark'];
  format = '.py';
  listfileType = {
    python: '.py',
    cpp: '.cpp',
    java: '.java',
    javascript: '.js',
  };
  background_color = '';
  text_color = '';
  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    automaticLayout: true,
  };
  code: string = '';
  LanguageSubject$ = new BehaviorSubject<string>(this.editorOptions.language);
  back() {
    window.history.back();
  }
  onInit(editor: any) {
    let line = editor.getPosition();
  }

}
