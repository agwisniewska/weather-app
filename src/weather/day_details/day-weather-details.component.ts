import { DayWeatherDetailsController } from './day-weather-details.controller';

export class DayWeatherDetailsComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.controller = DayWeatherDetailsController;
    this.controllerAs = 'details';
    this.template = './day-weather-details.html';
  }
}
