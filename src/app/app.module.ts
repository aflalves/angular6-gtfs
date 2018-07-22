import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GtfsModule } from 'src/app/modules/gtfs/gtfs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GtfsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClNFPrkwLx2Ix2L3pQ50yDn2tH7ZXjlUw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
