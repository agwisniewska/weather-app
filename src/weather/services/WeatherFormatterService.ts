import { WeatherForecast } from "../model/WeatherForecast";
import { IPromise } from "angular";
import { groupBy, values } from "lodash";
import * as moment from "moment";
import { WeatherFrontendModel } from "../model/WeatherFrontendModel";
import { DailyWeather } from "../model/DailyWeather";
import { Measurement } from "../model/Measurement";

export class WeatherFormatterService {
  constructor() {
    "ngInject";
  }

  public mapWeatherForecastToModel = (
    weatherForecast: WeatherForecast
  ): WeatherFrontendModel => {
    const days: DailyWeather[] = this.groupMeasurementsByDate(
      weatherForecast.measurementsList
    );
    return new WeatherFrontendModel(days);
  };

  private groupMeasurementsByDate = (list: Measurement[]): DailyWeather[] => {
    const days: DailyWeather[] = [];
    const grouped: any = values(
      groupBy(list, (element: Measurement) =>
        moment.unix(element.date).format("DD/MM/YYYY")
      )
    );
    grouped.map((element: Measurement[]) =>
      days.push(this.getDailyWeather(element))
    );
    return days;
  };

  private getDailyWeather = (element: Measurement[]): DailyWeather => {};

  //   private countMinTemperature = (): void => {};
  //   private countMaxTemperature = (): void => {};
  //   private countMeanTemperature = (): void => {};
  //   private countModeTemperature = (): void => {};
}
