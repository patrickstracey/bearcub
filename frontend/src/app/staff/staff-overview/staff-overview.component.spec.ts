import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOverviewComponent } from './staff-overview.component';

describe('EmployeeOverviewComponent', () => {
  let component: StaffOverviewComponent;
  let fixture: ComponentFixture<StaffOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
