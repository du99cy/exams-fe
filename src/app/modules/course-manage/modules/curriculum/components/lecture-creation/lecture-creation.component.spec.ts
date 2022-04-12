import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureCreationComponent } from './lecture-creation.component';

describe('LectureCreationComponent', () => {
  let component: LectureCreationComponent;
  let fixture: ComponentFixture<LectureCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
