import { WeatherController } from './weather.controller';

export class WeatherComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public templateUrl: any;

  constructor() {
    this.controller = WeatherController;
    this.controllerAs = 'weather';
    this.templateUrl = 'weather/weather.html';
  }
}
