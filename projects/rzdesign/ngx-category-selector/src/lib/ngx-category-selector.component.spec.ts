import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCategorySelectorComponent } from './ngx-category-selector.component';

describe('NgxCategorySelectorComponent', () => {
  let component: NgxCategorySelectorComponent;
  let fixture: ComponentFixture<NgxCategorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCategorySelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
