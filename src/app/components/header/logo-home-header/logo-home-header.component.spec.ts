import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHomeHeaderComponent } from './logo-home-header.component';

describe('LogoHomeHeaderComponent', () => {
  let component: LogoHomeHeaderComponent;
  let fixture: ComponentFixture<LogoHomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoHomeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
