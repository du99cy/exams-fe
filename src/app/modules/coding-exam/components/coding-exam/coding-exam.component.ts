import { HttpErrorResponse } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';


import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { CodingExamService } from '@modules/coding-exam/services/coding-exam.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { DialogSubmitComponent } from '../dialog-submit/dialog-submit.component';
import { OptionCodingEditorComponent } from '../option-coding-editor/option-coding-editor.component';


@Component({
  selector: 'app-coding-screen',
  templateUrl: './coding-exam.component.html',
  styleUrls: ['./coding-exam.component.scss'],
})
export class CodingExamComponent implements OnInit, OnDestroy, AfterViewInit {
  // hide some field of every testcase
  is_get_testcase_result = false;
  compile_error = {is_compile_error :false,detail: ''}
  testcase_hide_sum:number = 0

  //content loaded
  contentLoaded_question = false;
  contentLoaded_testcase = false;
  contentLoaded_scripts = false;
  //set time for app-clock
  time: number = 60;
  //question in current
  question_current: Question = new Question();
  question_current_subject$ = new BehaviorSubject<Question>(
    this.question_current
  );
  //list of testcase in current
  testcase_current_list: TestCase[] = [];

  all_questions_observable!: Observable<Question[]>;

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
    language: 'python',
    automaticLayout: true,
  };
  code: string = '';

  LanguageSubject$ = new BehaviorSubject<string>(this.editorOptions.language);

  // @ViewChild(ClockComponent) clock!: ClockComponent;

  constructor(
    public dialog: MatDialog,
    private elRef: ElementRef,
    private route: ActivatedRoute,
    private CodingService: CodingExamService
  ) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    
  }
  //will is call after ngAfterView
  //will be used when I subscribe in view(like async subscribe way)
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



//interface for Question
export class Question {
  dau_vao: { ten_dau_vao: string; kieu_du_lieu: string }[] = [];
  gioi_han_thuc_thi: number = 0;
  id: string = '';
  kieu_du_lieu_dau_ra: string = '';
  ma_ky_thi: string = '';
  mo_ta: string = '';
  ngay_tao: number = 0;
  ten_cau_hoi: string = '';
  ten_ham: string = '';
  ten_ky_thi: string = '';

  constructor() {}
}

export class TestCase {
  chuoi_gia_tri_dau_vao: {
    ten_dau_vao: string;
    kieu_du_lieu: string;
    gia_tri: string;
  }[] = [];
  gia_tri_dau_ra: { kieu_du_lieu: string; gia_tri: string } = {
    kieu_du_lieu: '',
    gia_tri: '',
  };
  id: string = '';
  ma_cau_hoi: string = '';
  ten_cau_hoi: string = '';
  output: string = '';
  score: number = 0;
  console_log: string = '';

  constructor() {}
}