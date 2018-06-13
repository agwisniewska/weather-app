import { module, IModule } from 'angular';

import 'angular-resource';
import './../weather.templates';
import { WeatherComponent } from './weather.component';
import { WeatherFormatterService } from './services/WeatherFormatterService';
import { WeatherResponseMapper } from './services/WeatherResponseMapper';
import { WeatherRequestService } from './services/WeatherRequestService';
import { WeatherService } from './services/WeatherService';
import { DailyWeatherComponent } from './day/daily-weather.component';

export const WeatherModule: any = module('app', ['templates', 'ngResource'])
  .service('WeatherFormatterService', WeatherFormatterService)
  .service('WeatherRequestService', WeatherRequestService)
  .service('WeatherResponseMapper', WeatherResponseMapper)
  .service('WeatherService', WeatherService)
  .component('day', new DailyWeatherComponent())
  .component('weather', new WeatherComponent());
