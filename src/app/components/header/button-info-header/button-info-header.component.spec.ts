import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInfoHeaderComponent } from './button-info-header.component';

describe('ButtonInfoHeaderComponent', () => {
  let component: ButtonInfoHeaderComponent;
  let fixture: ComponentFixture<ButtonInfoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonInfoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
