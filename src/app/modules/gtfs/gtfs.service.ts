import { Injectable } from '@angular/core';

import { GtfsMock } from './gtfs.mock';
import { GtfsEnum } from '../../enums/gtfs.enum';

/**
 * Singleton to provide GTFS data
 */
@Injectable()
export class GtfsService {

  private chicagoPaceFeed;

  constructor() {
    // Stores the mocked GTFS data
    this.chicagoPaceFeed = new GtfsMock().chicago_pace;
  }

  /**
   * @table: GTFS table name to be retrived
   * Returns the JSON of that table from the mock
   */
  getTable(table: GtfsEnum) {
    return this.chicagoPaceFeed[table];
  }
}
