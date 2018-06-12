import { module, IModule } from 'angular';

import 'angular-resource';
import './../weather.templates';
import { WeatherComponent } from './weather.component';
import { WeekWeatherComponent } from './week_weather/week-weather.component';
import { DayWeatherComponent } from './day/day-weather.component';
import { DayWeatherDetailsComponent } from './day_details/day-weather-details.component';
import { WeatherFormatterService } from './services/WeatherFormatterService';
import { WeatherResponseMapper } from './services/WeatherResponseMapper';
import { WeatherRequestService } from './services/WeatherRequestService';
import { WeatherService } from './services/WeatherService';

export const WeatherModule: any = module('app', ['templates', 'ngResource'])
  .service('WeatherFormatterService', WeatherFormatterService)
  .service('WeatherRequestService', WeatherRequestService)
  .service('WeatherResponseMapper', WeatherResponseMapper)
  .service('WeatherService', WeatherService)
  .component('weather', new WeatherComponent());
