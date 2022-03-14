import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherResponse } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl: string = environment.apiURL;
  private apiKey: string = environment.apiKey;

  private weatherSubject: BehaviorSubject<WeatherResponse> =
    new BehaviorSubject({} as WeatherResponse);
  public weather$ = this.weatherSubject.asObservable();

  constructor(private http: HttpClient) {}

  public setWeather(weather: WeatherResponse) {
    this.weatherSubject.next(weather);
  }

  public searchWeather(city: string) {
    city = city.trim();
    if (!city) return;

    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('lang', 'es')
      .set('units', 'metric');

    return this.http.get<WeatherResponse>(`${this.apiUrl}weather`, { params });
  }
}
