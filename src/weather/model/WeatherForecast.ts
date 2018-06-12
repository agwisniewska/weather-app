import { Measurement } from './Measurement';

export class WeatherForecast {
  public measurementsList: Measurement[];

  constructor(measurementList: Measurement[]) {
    this.measurementsList = measurementList;
  }
}
