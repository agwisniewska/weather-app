export class Measurement {
  public date: any;
  public temperature: number;
  public description: string;
  public weatherIcon: string;

  constructor(
    date: any,
    temperature: number,
    description: string,
    weatherIcon: string
  ) {
    this.date = date;
    this.temperature = temperature;
    this.description = description;
    this.weatherIcon = weatherIcon;
  }
}
