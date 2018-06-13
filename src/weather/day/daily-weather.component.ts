import { DailyWeatherController } from './daily-weather.controller';

export class DailyWeatherComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.controller = DailyWeatherController;
    this.controllerAs = 'day';
    this.template = './day-weather.html';
  }
}
