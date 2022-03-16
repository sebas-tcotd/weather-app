import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from '../interfaces/weather-response.interface';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl: string = environment.apiURL;
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  public getWeatherByCity(city: string) {
    city = city.trim();
    if (!city) return of();

    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('lang', 'es')
      .set('units', 'metric');

    return this.http
      .get<WeatherResponse>(`${this.apiUrl}weather`, { params })
      .pipe(
        map(
          (res) =>
            new Weather(
              res.main.temp,
              res.name,
              res.sys.country,
              res.weather[0].description,
              false
            )
        )
      );
  }

  public getWeatherByPosition(position: GeolocationCoordinates) {
    const params = new HttpParams()
      .set('lat', position.latitude)
      .set('lon', position.longitude)
      .set('appid', this.apiKey)
      .set('lang', 'es')
      .set('units', 'metric');

    return this.http.get<WeatherResponse>(`${this.apiUrl}weather`, { params });
  }

  public getGeoposition(): Promise<GeolocationCoordinates> {
    return new Promise((resolve) =>
      navigator.geolocation.getCurrentPosition((position) =>
        resolve(position.coords)
      )
    );
  }
}
