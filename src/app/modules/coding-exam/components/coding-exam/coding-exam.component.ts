import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TestcaseCheck } from '@modules/coding-exam/models/testcase-check';
import { CodingExamService } from '@modules/coding-exam/services/coding-exam.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { OptionCodingEditorComponent } from '../option-coding-editor/option-coding-editor.component';

@Component({
  selector: 'my-app',
  templateUrl: `./coding-exam.component.html`,
  styleUrls: [`./coding-exam.component.scss`],
})
export class CodingExamComponent implements OnInit {
  dataObservable: Observable<any>;
  contentId: string;
  is_get_testcase_result = false;
  contentLoaded_scripts = false;
  fg: any;
  list_language = ['python', 'java'];
  list_theme = ['vs-light', 'vs-dark'];
  format = '.java';
  listfileType = {
    python: '.py',
    java: '.java',
    javascript: '.js',
  };
  background_color = '';
  text_color = '';
  editorOptions = {
    theme: 'vs-dark',
    language: 'cpp',
    automaticLayout: true,
  };
  LanguageSubject$ = new BehaviorSubject<string>(this.editorOptions.language);
  back() {
    window.history.back();
  }
  onInit(editor: any) {
    let line = editor.getPosition();
  }

  constructor(
    private codingExamService: CodingExamService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private elRef: ElementRef,
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
  openDialog(): void {
    const dialogRef = this.dialog.open(OptionCodingEditorComponent, {
      data: this.editorOptions,
      autoFocus: false,
      restoreFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.editorOptions = {
          theme: result.theme,
          language: result.language,
          automaticLayout: true,
        };
        let lg = this.editorOptions.language;
        this.format = (this.listfileType as any)[lg];
        this.changeColor();
        this.updateCustomProperty();
        //load again template of code
        //use for mat-spiner
        this.contentLoaded_scripts = false;

        this.LanguageSubject$.next(this.editorOptions.language);

        //reload test case
        this.is_get_testcase_result = false
      }
    });
  }
  updateCustomProperty() {
    this.elRef.nativeElement.style.setProperty(
      '--background_color',
      `${this.background_color}`
    );
    this.elRef.nativeElement.style.setProperty(
      '--text_color',
      `${this.text_color}`
    );
  }
  changeColor() {
    if (this.editorOptions.theme === 'vs-dark') {
      this.background_color = '#1e1e1e';
      this.text_color = 'white';
    }
    if (this.editorOptions.theme === 'vs-light') {
      this.background_color = 'white';
      this.text_color = 'black';
    }
  }
}


