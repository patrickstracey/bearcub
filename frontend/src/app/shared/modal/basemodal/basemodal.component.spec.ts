import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemodalComponent } from './basemodal.component';

describe('BasemodalComponent', () => {
  let component: BasemodalComponent;
  let fixture: ComponentFixture<BasemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
