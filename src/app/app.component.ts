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

  constructor(private gtfsService: GtfsService) {}

  ngOnInit() {
    console.log(this.gtfsService.getTable(GtfsEnum.STOPS));
  }

}
