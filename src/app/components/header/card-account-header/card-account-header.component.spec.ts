import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountHeaderComponent } from './card-account-header.component';

describe('CardAccountHeaderComponent', () => {
  let component: CardAccountHeaderComponent;
  let fixture: ComponentFixture<CardAccountHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccountHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
