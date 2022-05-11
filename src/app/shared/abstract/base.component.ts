import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnDestroy {
  ngUnsubscibed = new Subject();
  ngOnDestroy(): void {
    this.ngUnsubscibed.next(null);
  }
}
