import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCollectionComponent } from './timer-collection.component';

describe('TimerCollectionComponent', () => {
  let component: TimerCollectionComponent;
  let fixture: ComponentFixture<TimerCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
