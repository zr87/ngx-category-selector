import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxCategorySelectorModule} from '@rzdesign/ngx-category-selector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCategorySelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
