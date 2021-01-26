import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBarCarComponent } from './research-bar-car.component';

describe('ResearchBarCarComponent', () => {
  let component: ResearchBarCarComponent;
  let fixture: ComponentFixture<ResearchBarCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchBarCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchBarCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
