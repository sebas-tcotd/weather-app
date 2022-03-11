import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = environment.apiURL;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  public getWeather(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', this.apiKey);

    return this.http.get<Weather>(`${this.apiUrl}weather`, { params });
  }
}
