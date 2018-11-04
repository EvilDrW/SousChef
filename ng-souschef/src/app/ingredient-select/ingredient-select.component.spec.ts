import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientSelectComponent } from './ingredient-select.component';

describe('IngredientSelectComponent', () => {
  let component: IngredientSelectComponent;
  let fixture: ComponentFixture<IngredientSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
