import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchCarsViewComponent } from './research-cars-view.component';

describe('ResearchCarsViewComponent', () => {
  let component: ResearchCarsViewComponent;
  let fixture: ComponentFixture<ResearchCarsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchCarsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchCarsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
