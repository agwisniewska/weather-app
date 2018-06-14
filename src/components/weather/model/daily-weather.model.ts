export class DailyWeather {
  public date: string;
  public minTemperature: number;
  public maxTemperature: number;
  public meanTemperature: number;
  public modeTemperature: number;
  public icon: string;
  public description: string;

  constructor(
    date: string,
    minTemperature: number,
    maxTemperature: number,
    meanTemperature: number,
    modeTemperature: number,
    icon: string,
    description: string
  ) {
    this.date = date;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
    this.meanTemperature = meanTemperature;
    this.modeTemperature = modeTemperature;
    this.icon = icon;
    this.description = description;
  }
}
