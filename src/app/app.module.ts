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
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonToggleModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatTabsModule} from '@angular/material';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { LinesComponent } from './components/lines/lines.component';
import { TripComponent } from './views/trips/trip.component';
import { StopsComponent } from './views/stops/stops.component';
import { AgencyComponent } from './views/agency/agency.component';
import { RoutesComponent } from './views/routes/routes.component';
import { MatTab } from '@angular/material/tabs/typings/tab';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'trips', component: TripComponent },
  { path: 'stops', component: StopsComponent },
  { path: 'agency', component: AgencyComponent},
  { path: 'routes', component: RoutesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TripComponent,
    WelcomeComponent,
    LinesComponent,
    StopsComponent,
    AgencyComponent,
    RoutesComponent
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
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
