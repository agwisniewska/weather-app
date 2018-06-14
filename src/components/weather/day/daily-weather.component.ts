import { DailyWeatherController } from "./daily-weather.controller";

export class DailyWeatherComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public bindings: { [name: string]: string };
  public controllerAs: string;
  public templateUrl: string;

  constructor() {
    this.controller = DailyWeatherController;
    this.bindings = {
      dailyWeather: "<"
    };
    this.controllerAs = "daily";
    this.templateUrl = "app/components/weather/day/daily-weather.html";
  }
}
