import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarComponent } from './cards-car.component';

describe('CardsCarComponent', () => {
  let component: CardsCarComponent;
  let fixture: ComponentFixture<CardsCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
