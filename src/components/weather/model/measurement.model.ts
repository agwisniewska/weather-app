export class Measurement {
  public date: string;
  public temperature: number;
  public description: string;
  public weatherIcon: string;

  constructor(
    date: string,
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
