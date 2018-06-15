import {countBy, forOwn, groupBy, keys, map, maxBy, meanBy} from 'lodash';
import {DailyWeather} from '../model/daily-weather.model';
import {Measurement} from '../model/measurement.model';
import {WeatherForecast} from '../model/weather-forecast.model';
import {WeatherPanelModel} from '../model/weather-panel.model';

export class WeatherFormatterService {
  constructor() {
    'ngInject';
  }

  public mapWeatherForecastToModel = (
    weatherForecast: WeatherForecast,
  ): WeatherPanelModel => {
    const grouped: {
      [key: string]: Measurement[];
    } = this.groupMeasurementsByDate(weatherForecast.measurementsList);
    const days: DailyWeather[] = this.mapMeasurementsToDailyWeatherList(
      grouped,
    );
    return new WeatherPanelModel(days);
  };

  public mapMeasurementsToDailyWeatherList = (groupedMeasurements: {
    [key: string]: Measurement[];
  }): DailyWeather[] => {
    const days: DailyWeather[] = [];
    forOwn(groupedMeasurements, (value: Measurement[], date: string) => {
      const measurements: Measurement[] = groupedMeasurements[date];
      const minTemp: number = this.countMinTemperature(measurements);
      const maxTemp: number = this.countMaxTemperature(measurements);
      const meanTemp: number = this.countMeanTemperature(measurements);
      const modeTemp: number = this.countModeTemperature(measurements);
      const dailyWeather: DailyWeather = new DailyWeather(
        date,
        minTemp,
        maxTemp,
        meanTemp,
        modeTemp,
        measurements[0].weatherIcon,
        measurements[0].description,
      );
      days.push(dailyWeather);
    });
    return days;
  };

  public groupMeasurementsByDate = (
    list: Measurement[],
  ): {[key: string]: Measurement[]} => {
    return groupBy(list, (element: Measurement) => element.date);
  };

  public getTemperatures = (measurements: Measurement[]): number[] => {
    return measurements.map(
      (measurement: Measurement) => measurement.temperature,
    );
  };
  public countMinTemperature = (measurements: Measurement[]): number => {
    return Math.min(...this.getTemperatures(measurements));
  };
  public countMaxTemperature = (measurements: Measurement[]): number => {
    return Math.max(...this.getTemperatures(measurements));
  };

  private countMeanTemperature = (measurements: Measurement[]): number => {
    const mean: number = meanBy(
      measurements,
      (measurement: Measurement) => measurement.temperature,
    );
    return parseFloat(mean.toFixed(2));
  };
  private countModeTemperature = (measurements: Measurement[]): number => {
    let countArray: {[key: number]: number} = countBy(
      map(measurements, (measurement: Measurement) => measurement.temperature),
    );
    const maxValue: string = maxBy(
      keys(countArray),
      (key: any) => countArray[key],
    );
    return parseInt(maxValue, 0);
  };
}
