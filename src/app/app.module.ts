import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GtfsModule } from 'src/app/modules/gtfs/gtfs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/navigation/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonToggleModule } from '@angular/material';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LinesComponent } from './components/lines/lines.component';
import { TripComponent } from './components/map/trip.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'trips', component: TripComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TripComponent,
    WelcomeComponent,
    LinesComponent
  ],
  imports: [
    BrowserModule,
    GtfsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClNFPrkwLx2Ix2L3pQ50yDn2tH7ZXjlUw'
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
