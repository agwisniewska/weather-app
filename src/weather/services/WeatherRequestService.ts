import { WeatherForecast } from "../model/WeatherForecast";
import { IPromise } from "angular";
import { Measurement } from "../model/Measurement";
import { WeatherResponseMapper } from "./WeatherResponseMapper";

export class WeatherRequestService {
  private static readonly ENDPOINT: string =
    "https://api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=1a4b19ac93fb8d3873d06b05fa0aec57";

  private $resource: any;
  private weatherRequest: any;

  private weatherResponseMapper: WeatherResponseMapper;

  constructor($resource: any, WeatherResponseMapper: WeatherResponseMapper) {
    "ngInject";
    this.weatherResponseMapper = WeatherResponseMapper;
    this.$resource = $resource;
    this.weatherRequest = $resource(
      WeatherRequestService.ENDPOINT,
      {},
      {
        getWeatherForecast: {
          method: "GET"
        }
      }
    );
  }

  public getWeatherForecast = (): IPromise<WeatherForecast> => {
    return this.weatherRequest
      .getWeatherForecast()
      .$promise.then((restModel: any) =>
        this.weatherResponseMapper.mapToWeatherForecast(restModel)
      );
  };
}
