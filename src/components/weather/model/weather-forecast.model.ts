import { Measurement } from './measurement.model';
export class WeatherForecast {
  public measurementsList: Measurement[];

  constructor(measurementList: Measurement[]) {
    this.measurementsList = measurementList;
  }
}
