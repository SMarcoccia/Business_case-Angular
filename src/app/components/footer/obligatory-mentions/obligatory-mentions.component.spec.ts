import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligatoryMentionsComponent } from './obligatory-mentions.component';

describe('ObligatoryMentionsComponent', () => {
  let component: ObligatoryMentionsComponent;
  let fixture: ComponentFixture<ObligatoryMentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObligatoryMentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligatoryMentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
