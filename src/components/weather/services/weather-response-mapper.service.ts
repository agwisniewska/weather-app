import * as moment from 'moment';
import { WeatherForecast } from '../model/weather-forecast.model';
import { Measurement } from '../model/measurement.model';

export class WeatherResponseMapper {
  public mapToWeatherForecast = (restModel: any): WeatherForecast => {
    const list: Measurement[] = this.mapToMeasurementsList(restModel.list);
    return new WeatherForecast(list);
  }

  public mapToMeasurementsList = (list: any): Measurement[] => {
    const measurements: Measurement[] = [];
    list.map((element: any) => {
      const singleMeasurement: Measurement = new Measurement(
        moment.unix(element.dt).format('DD/MM/YYYY'),
        Math.floor(element.main.temp - 273.15),
        element.weather[0].description,
        element.weather[0].icon
      );
      measurements.push(singleMeasurement);
    });
    return measurements;
  }
}
