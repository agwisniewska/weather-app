import { module, IModule } from 'angular';
import 'angular-resource';
import { WeatherComponent } from './weather.component';
import { DailyWeatherComponent } from './day/daily-weather.component';

export const WeatherModule: any = module('app.weather', [])
  .component('day', new DailyWeatherComponent())
  .component('weather', new WeatherComponent());
