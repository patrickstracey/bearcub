import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyOverviewComponent } from './family-overview.component';

describe('FamilyOverviewComponent', () => {
  let component: FamilyOverviewComponent;
  let fixture: ComponentFixture<FamilyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
