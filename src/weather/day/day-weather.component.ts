import { DayWeatherController } from './day-weather.controller';

export class DayWeatherComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.controller = DayWeatherController;
    this.controllerAs = 'day';
    this.template = './day-weather.html';
  }
}
