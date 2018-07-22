import { Component, OnInit } from '@angular/core';
import { GtfsService } from 'src/app/modules/gtfs/gtfs.service';
import { GtfsEnum } from 'src/app/enums/gtfs.enum';
import { Agency } from '../../models/agency.model';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  constructor(private gtfsService: GtfsService) { }

  agencyData = [];

  ngOnInit() {
    this.generateCards(this.gtfsService.getTable(GtfsEnum.AGENCY));
  }

  generateCards(agency: Agency) {
    this.agencyData = [
      {field: 'ID', value: agency.agency_id},
      {field: 'Name', value: agency.agency_name},
      {field: 'URL', value: agency.agency_url},
      {field: 'Phone', value: agency.agency_phone}
    ];

    console.log('generate data', this.agencyData);
  }
}
