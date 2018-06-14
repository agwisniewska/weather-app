import { WeatherPanelModel } from './model/weather-panel.model';
import { WeatherFormatterService } from './services/weather-formatter.service';
import { WeatherService } from './services/weather.service';
import { WeatherForecast } from './model/weather-forecast.model';
import { IScope } from 'angular';

export class WeatherController {
  public weatherModel: WeatherPanelModel;
  private weatherFormatterService: WeatherFormatterService;
  private weatherService: WeatherService;
  private $scope: IScope;

  constructor(
    $scope: IScope,
    WeatherService: WeatherService,
    WeatherFormatterService: WeatherFormatterService
  ) {
    this.$scope = $scope;
    this.weatherService = WeatherService;
    this.weatherFormatterService = WeatherFormatterService;
  }
  public $onInit = async (): Promise<void> => {
    this.weatherModel = await this.getWeatherForecastAndMapToWeatherModel();
    this.$scope.$applyAsync();
  }

  public getWeatherForecastAndMapToWeatherModel = async (): Promise<
    WeatherPanelModel
  > => {
    const weatherForecast: WeatherForecast = await this.weatherService.getWeatherForecast();
    return this.weatherFormatterService.mapWeatherForecastToModel(
      weatherForecast
    );
  }
}
