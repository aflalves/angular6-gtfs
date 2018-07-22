import { Component, OnInit } from '@angular/core';
import { GtfsService } from 'src/app/modules/gtfs/gtfs.service';
import { GtfsEnum } from 'src/app/enums/gtfs.enum';

@Component({
  selector: 'app-trip-component',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  tripRoute = [];
  trips = [];

  constructor(private gtfsService: GtfsService) {}

  ngOnInit() {
    this.trips = this.gtfsService.getTable(GtfsEnum.TRIPS);
  }

  onShowLine(trip_id: string) {
    this.tripRoute = this.gtfsService.buildTripRoute(trip_id);
  }

}
