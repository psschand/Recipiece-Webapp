import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientEntryComponent } from './ingredient-entry.component';

describe('IngredientEntryComponent', () => {
  let component: IngredientEntryComponent;
  let fixture: ComponentFixture<IngredientEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
