import { DailyWeather } from '../model/DailyWeather';

export class DailyWeatherController {
  public dailyWeather: DailyWeather;
  public selected: boolean;

  public $onInit = () => {};

  public openDetails = (): void => {
    this.selected = !this.selected;
    console.error(this.dailyWeather);
  }
}
