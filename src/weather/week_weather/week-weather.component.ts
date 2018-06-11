import { WeekWeatherController } from './week-weather.controller';

export class WeekWeatherComponent implements ng.IComponentOptions {
  public controller: ng.Injectable<ng.IControllerConstructor>;
  public controllerAs: string;
  public template: string;

  constructor() {
    this.controller = WeekWeatherController;
    this.controllerAs = 'week';
    this.template = './week.html';
  }
}
