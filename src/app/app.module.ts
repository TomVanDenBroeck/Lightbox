import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LightBoxOneComponent } from './light-box-one.component';
import { LightBoxOneSingleComponent } from './light-box-one-single.component';

@NgModule({
  declarations: [
    AppComponent,
    LightBoxOneComponent,
    LightBoxOneSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
