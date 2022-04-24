import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestcaseCheck } from '@modules/coding-exam/models/testcase-check';
import { CodingExamService } from '@modules/coding-exam/services/coding-exam.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: `./coding-exam.component.html`,
  styleUrls: [`./coding-exam.component.scss`],
})
export class CodingExamComponent implements OnInit {
  dataObservable: Observable<any>;
  contentId: string;
  // fg: any;
  // list_language = ['python', 'cpp', 'java'];
  // list_theme = ['vs-light', 'vs-dark'];
  // format = '.py';
  // listfileType = {
  //   python: '.py',
  //   cpp: '.cpp',
  //   java: '.java',
  //   javascript: '.js',
  // };
  // background_color = '';
  // text_color = '';
  editorOptions = {
    theme: 'vs-dark',
    language: 'python',
    automaticLayout: true,
  };
  //LanguageSubject$ = new BehaviorSubject<string>(this.editorOptions.language);
  // back() {
  //   window.history.back();
  // }
  onInit(editor: any) {
    let line = editor.getPosition();
  }

  constructor(
    private codingExamService: CodingExamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.contentId = params['content_id'];
      this.dataObservable = this.codingExamService
        .getFunctionTemplate(this.contentId, this.editorOptions.language)
        .pipe(
          map((res) => {

            return res.data;
          })
        );
    });
  }

  runTest(codeEditor:any,data:any){
    let scripts = codeEditor._value
    this.codingExamService.runTestcase(this.contentId,this.editorOptions.language,scripts).subscribe(res=>{
      data.testcase_list = res.data
    })

  }

}
