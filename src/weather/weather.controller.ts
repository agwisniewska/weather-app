import { WeatherFormatterService } from './services/WeatherFormatterService';
import { WeatherForecast } from './model/WeatherForecast';
import { IPromise } from 'angular';
import { WeatherService } from './services/WeatherService';
import { WeatherFrontendModel } from './model/WeatherFrontendModel';
export class WeatherController {
  public weatherModel: any;
  private weatherFormatterService: WeatherFormatterService;
  private weatherService: WeatherService;
  constructor(
    WeatherService: WeatherService,
    WeatherFormatterService: WeatherFormatterService
  ) {
    this.weatherService = WeatherService;
    this.weatherFormatterService = WeatherFormatterService;
  }
  public $onInit = (): void => {
    this.getWeather();
  }

  public getWeather = (): IPromise<WeatherFrontendModel> => {
    return this.weatherService
      .getWeatherForecast()
      .then(
        (weather: WeatherForecast) =>
          (this.weatherModel = this.weatherFormatterService.mapWeatherForecastToModel(
            weather
          ))
      );
  }
}
