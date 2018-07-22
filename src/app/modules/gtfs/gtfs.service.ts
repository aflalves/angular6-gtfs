import { Injectable } from '@angular/core';

import { GtfsMock } from './gtfs.mock';
import { GtfsEnum } from '../../enums/gtfs.enum';

/**
 * Singleton to provide GTFS data
 */
@Injectable()
export class GtfsService {

  private gtfsFeed;

  constructor() {
    // Gets mocked GTFS data
    this.gtfsFeed = new GtfsMock().UM_Transit;

    // Creates hash map of stops for fast access of stop lat/lng
    this.gtfsFeed[GtfsEnum.STOPS] = this.mapStops();
  }

  /**
   * Converts JSON array of stops into hash map indexed by stop_id
  */
  mapStops() {
    return this.gtfsFeed[GtfsEnum.STOPS].reduce(function(map, obj) {
      map[obj.stop_id] = obj;
      return map;
    }, {});
  }

  /**
   * @table: GTFS table name to be retrived
   * Returns the JSON of given table from the mock
   */
  getTable(table: GtfsEnum) {
    return this.gtfsFeed[table];
  }

  /**
   * @stop_id: Stop identifier
   * Returns the stop data (name, lat, lng)
   */
  getStopData(stop_id: string) {
    return this.gtfsFeed[GtfsEnum.STOPS][stop_id];
  }

  /**
   * @trip_id: trip identifier
   * Returns all stops of given trip with its stop data from stop_times
   */
  buildTripRoute(trip_id: string) {
    const tripStops = this.getTripStops(trip_id);
    this.addStopData(tripStops);

    return tripStops;
  }

  /**
   * @trip_id: trip identifier
   * Returns all stops of a trip from stop_times
   */
  getTripStops(trip_id: string) {
    return this.gtfsFeed[GtfsEnum.STOP_TIMES].filter(stop => stop.trip_id === trip_id);
  }

  /**
   * @trip_stops: array with all stops of a trip
   * Adds data from stops to each stop_time of a trip
   */
  addStopData(trip_stops: Array<any>) {
    trip_stops.forEach(trip_stop => {
      trip_stop.stopData = this.getStopData(trip_stop.stop_id);
    });
  }

}
