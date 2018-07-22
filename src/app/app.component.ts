import { Component } from '@angular/core';
import { GtfsService } from './modules/gtfs/gtfs.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { GtfsEnum } from './enums/gtfs.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tripRoute = [];
  trips = [];

  constructor(private gtfsService: GtfsService) {}

  ngOnInit() {
    this.trips = this.gtfsService.getTable(GtfsEnum.TRIPS);
    this.tripRoute = this.gtfsService.buildTripRoute(this.trips[2].trip_id);
  }

  showTrip(trip_id: string) {
    this.tripRoute = this.gtfsService.buildTripRoute(trip_id);
  }

}
