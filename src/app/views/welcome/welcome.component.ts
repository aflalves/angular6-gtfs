import { Component, OnInit } from '@angular/core';
import { GtfsEnum } from 'src/app/enums/gtfs.enum';
import { GtfsService } from 'src/app/modules/gtfs/gtfs.service';
import { Agency } from 'src/app/models/agency.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private gtfsService: GtfsService) { }

  agency: Agency;

  ngOnInit() {
    this.agency = this.gtfsService.getTable(GtfsEnum.AGENCY);
  }

}
