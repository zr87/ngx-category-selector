import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySetComponent } from './category-set.component';

describe('CategorySetComponent', () => {
  let component: CategorySetComponent;
  let fixture: ComponentFixture<CategorySetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
