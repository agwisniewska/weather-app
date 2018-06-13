import { DailyWeather } from "./DailyWeather";

export class WeatherPanelModel {
  public days: DailyWeather[];

  constructor(days: DailyWeather[]) {
    this.days = days;
  }
}
