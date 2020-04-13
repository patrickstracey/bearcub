import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinOverviewComponent } from './checkin-overview.component';

describe('CheckinOverviewComponent', () => {
  let component: CheckinOverviewComponent;
  let fixture: ComponentFixture<CheckinOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
