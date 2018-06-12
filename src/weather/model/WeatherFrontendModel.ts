import { DailyWeather } from './DailyWeather';

export class WeatherFrontendModel {
  public days: DailyWeather[];

  constructor(days: DailyWeather[]) {
    this.days = days;
  }
}
