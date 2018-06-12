import { WeatherRequestService } from "./WeatherRequestService";
import { IPromise } from "angular";
import { WeatherForecast } from "../model/WeatherForecast";
export class WeatherService {
  private weatherRequestService: WeatherRequestService;

  constructor(WeatherRequestService: WeatherRequestService) {
    "ngInject";
    this.weatherRequestService = WeatherRequestService;
  }

  public getWeatherForecast = (): IPromise<WeatherForecast> => {
    return this.weatherRequestService.getWeatherForecast();
  };
}
