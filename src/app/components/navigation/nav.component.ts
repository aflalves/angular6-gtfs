import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GtfsService } from 'src/app/modules/gtfs/gtfs.service';
import { GtfsEnum } from 'src/app/enums/gtfs.enum';
import { Agency } from 'src/app/models/agency.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  agency: Agency;

  constructor(private breakpointObserver: BreakpointObserver, private gtfsService: GtfsService) {}

  ngOnInit() {
    this.agency = this.gtfsService.getTable(GtfsEnum.AGENCY);
  }

}
