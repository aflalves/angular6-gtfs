import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GtfsModule } from 'src/app/modules/gtfs/gtfs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GtfsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
