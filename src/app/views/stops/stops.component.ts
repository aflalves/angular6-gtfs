import { Component, OnInit } from '@angular/core';
import { GtfsService } from 'src/app/modules/gtfs/gtfs.service';
import { GtfsEnum } from '../../enums/gtfs.enum';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {

  stops = [];

  constructor(private gtfsService: GtfsService) { }

  ngOnInit() {
    this.stops = this.gtfsService.getTable(GtfsEnum.STOPS);
  }

}
