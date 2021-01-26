import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCarViewComponent } from './single-car-view.component';

describe('SingleCarViewComponent', () => {
  let component: SingleCarViewComponent;
  let fixture: ComponentFixture<SingleCarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
