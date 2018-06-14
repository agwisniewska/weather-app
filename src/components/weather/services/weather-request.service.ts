import { WeatherResponseMapper } from "./weather-response-mapper.service";
import { WeatherForecast } from "../model/weather-forecast.model";

export class WeatherRequestService {
  private static readonly ENDPOINT: string =
    "https://api.openweathermap.org/data/2.5/forecast?q=:city,us&APPID=:appID";

  private $resource: any;
  private weatherRequest: any;

  private weatherResponseMapper: WeatherResponseMapper;

  constructor($resource: any, WeatherResponseMapper: WeatherResponseMapper) {
    "ngInject";
    this.weatherResponseMapper = WeatherResponseMapper;
    this.$resource = $resource;
    this.weatherRequest = $resource(
      WeatherRequestService.ENDPOINT,
      { city: "Berlin", appID: "1a4b19ac93fb8d3873d06b05fa0aec57" },
      {
        getWeatherForecast: {
          method: "GET"
        }
      }
    );
  }

  public getWeatherForecast = async (): Promise<WeatherForecast> => {
    const weatherForecast: any = await this.weatherRequest.getWeatherForecast()
      .$promise;
    return this.weatherResponseMapper.mapToWeatherForecast(weatherForecast);
  };
}
