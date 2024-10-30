import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { WeatherService } from '../../weather/weather.service';

@Injectable()
export class ResolveLocationService implements Resolve<any> {
  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) { };

  resolve(): Observable<any> | Promise<any> | any  { // TODO: I think, It shouldn't be so
    this.weatherService.getWeatherByСurrentLocation()
      .then((city) => {
        return this.weatherService.createResponseWeatherByCity(city)
      })
      .catch(error => console.error(error));

    //return this.weatherService.createResponseWeatherByCity(route.params.city)
  }
}
