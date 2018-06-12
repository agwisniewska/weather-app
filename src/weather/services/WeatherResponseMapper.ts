import { Measurement } from '../model/Measurement';
import { WeatherForecast } from '../model/WeatherForecast';

export class WeatherResponseMapper {
  public mapToWeatherForecast = (restModel: any): WeatherForecast => {
    const list: Measurement[] = this.mapToMeasurementsList(restModel.list);
    return new WeatherForecast(list);
  }

  public mapToMeasurementsList = (list: any): Measurement[] => {
    const measurements: Measurement[] = [];
    list.map((element: any) => {
      const singleMeasurement: Measurement = new Measurement(
        element.dt,
        element.main.temp,
        element.weather[0].description,
        element.weather[0].icon
      );
      measurements.push(singleMeasurement);
    });
    return measurements;
  }
}
