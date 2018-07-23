import { Component, OnInit } from '@angular/core';
import { GtfsService } from 'src/app/modules/gtfs/gtfs.service';
import { GtfsEnum } from 'src/app/enums/gtfs.enum';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routes = [];

  constructor(private gtfsService: GtfsService) {}

  ngOnInit() {
    this.routes = this.gtfsService.getTable(GtfsEnum.ROUTES);
    console.log('got routes', this.routes);
  }

}
