import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  public searchWeather(city: string) {
    city = city.trim();

    if (!city) return;

    console.log(city);
  }
}
