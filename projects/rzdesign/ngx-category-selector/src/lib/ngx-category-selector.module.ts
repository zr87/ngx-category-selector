import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgxCategorySelectorComponent } from './ngx-category-selector.component';
import { CategorySetComponent } from './category-set/category-set.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [NgxCategorySelectorComponent, CategorySetComponent],
  imports: [CommonModule, FormsModule],
  exports: [NgxCategorySelectorComponent]
})
export class NgxCategorySelectorModule { }
