export class DailyWeather {
  public date: any;
  public minTemperature: number;
  public maxTemperature: number;
  public meanTemperature: number;
  public modeTemperature: number;

  constructor(
    date: any,
    minTemperature: number,
    maxTemperature: number,
    meanTemperature: number,
    modeTemperature: number
  ) {
    this.date = date;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
    this.meanTemperature = meanTemperature;
    this.modeTemperature = modeTemperature;
  }
}
