import { WeatherForecast } from '../model/weather-forecast.model';
import { WeatherRequestService } from './weather-request.service';

export class WeatherService {
  private weatherRequestService: WeatherRequestService;

  constructor(WeatherRequestService: WeatherRequestService) {
    'ngInject';
    this.weatherRequestService = WeatherRequestService;
  }

  public getWeatherForecast = async (): Promise<WeatherForecast> => {
    return await this.weatherRequestService.getWeatherForecast();
  }
}
