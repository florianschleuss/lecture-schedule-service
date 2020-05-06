import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureTableComponent } from './lecture-table.component';

describe('LectureTableComponent', () => {
  let component: LectureTableComponent;
  let fixture: ComponentFixture<LectureTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
