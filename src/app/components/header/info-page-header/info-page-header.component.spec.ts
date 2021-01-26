import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageHeaderComponent } from './info-page-header.component';

describe('InfoPageHeaderComponent', () => {
  let component: InfoPageHeaderComponent;
  let fixture: ComponentFixture<InfoPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
