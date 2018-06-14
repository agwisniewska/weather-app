import { module, IModule } from "angular";

import "angular-resource";
import { WeatherModule } from "./components/weather/weather.module";
import { AppComponent } from "./components/app.component";
import { WeatherFormatterService } from "./components/weather/services/weather-formatter.service";
import { WeatherRequestService } from "./components/weather/services/weather-request.service";
import { WeatherResponseMapper } from "./components/weather/services/weather-response-mapper.service";
import { WeatherService } from "./components/weather/services/weather.service";

export const AppModule: any = module("app", [
  "templates",
  "ngResource",
  WeatherModule.name
])
  .service("WeatherFormatterService", WeatherFormatterService)
  .service("WeatherRequestService", WeatherRequestService)
  .service("WeatherResponseMapper", WeatherResponseMapper)
  .service("WeatherService", WeatherService)
  .component("app", new AppComponent());
