import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxCategorySelectorModule} from '@rzdesign/ngx-category-selector';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxCategorySelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
