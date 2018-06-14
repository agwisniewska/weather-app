import { DailyWeather } from './daily-weather.model';

export class WeatherPanelModel {
  public days: DailyWeather[];

  constructor(days: DailyWeather[]) {
    this.days = days;
  }
}
