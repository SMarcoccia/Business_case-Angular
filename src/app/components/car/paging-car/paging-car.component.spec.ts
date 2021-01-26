import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingCarComponent } from './paging-car.component';

describe('PagingCarComponent', () => {
  let component: PagingCarComponent;
  let fixture: ComponentFixture<PagingCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
