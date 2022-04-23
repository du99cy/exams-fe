import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Function } from '../../models/function';
import { TestCase } from '../../models/testcase';
import { TestcaseService } from '../../services/testcase.service';

@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.scss'],
})
export class TestCaseComponent implements OnInit {
  @Input('content-id') contentId: string;
  @Input('course-id') course_id: string;
  @Input('function') function: Function;

  testcaseObservable: Observable<Array<TestCase>>;
  testcaseList: Array<TestCase> = [];
  testcaseAddOredit: TestCase;
  addTestcase: boolean = false;
  constructor(private tescaseService: TestcaseService) {}

  ngOnInit() {

    this.testcaseObservable = this.tescaseService.getAllTestcaseViaContentId(this.contentId)
  }
  addTestCaseFn() {
    this.testcaseAddOredit = {
      inputs: this.function.inputs,
      output: {
        datatype: this.function.output_data_type,
        value: '',
      },
    };
    this.addTestcase = true;
  }

  btnClickEventHandler(event: any) {
    if (event.btn_status == 1) {
      this.testcaseList.push(event.data);
      //add to database
      let testcase_add: TestCase = {
        ...event.data,
        content_id: this.course_id,
        course_id: this.course_id,
      };
      //this.tescaseService.addTestcase(testcase_add).subscribe();
    }

    this.addTestcase = false;
  }

  editTestcase(testcase: TestCase) {
    this.testcaseAddOredit = testcase;
    this.addTestcase = true;
  }
}
