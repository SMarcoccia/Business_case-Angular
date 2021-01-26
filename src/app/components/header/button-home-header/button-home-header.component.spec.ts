import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHomeHeaderComponent } from './button-home-header.component';

describe('ButtonHomeHeaderComponent', () => {
  let component: ButtonHomeHeaderComponent;
  let fixture: ComponentFixture<ButtonHomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHomeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
