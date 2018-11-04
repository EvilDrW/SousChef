import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecipeModalComponent } from './select-recipe-modal.component';

describe('SelectRecipeModalComponent', () => {
  let component: SelectRecipeModalComponent;
  let fixture: ComponentFixture<SelectRecipeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRecipeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecipeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
