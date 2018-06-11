import * as angular from 'angular';
import './../weather.templates';
import { WeatherComponent } from './weather.component';
import { WeekWeatherComponent } from './week_weather/week-weather.component';
import { DayWeatherComponent } from './day/day-weather.component';
import { DayWeatherDetailsComponent } from './day_details/day-weather-details.component';

export const WeatherModule = angular
  .module('app', ['templates'])
  .component('weather', new WeatherComponent());
