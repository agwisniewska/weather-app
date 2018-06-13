import { DailyWeatherDetailsController } from "./daily-weather-details.controller";
export class DailyWeatherDetailsComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.controller = DailyWeatherDetailsController;
    this.controllerAs = "details";
    this.template = "./day-weather-details.html";
  }
}
