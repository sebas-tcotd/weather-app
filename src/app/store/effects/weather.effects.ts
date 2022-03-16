import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';
import * as weatherActions from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
  constructor(
    private action$: Actions,
    private weatherService: WeatherService
  ) {}

  getCityWeather$ = createEffect(() =>
    this.action$.pipe(
      ofType(weatherActions.loadWeather),
      mergeMap((action) =>
        this.weatherService.getWeatherByCity(action.payload).pipe(
          map((weather) => weatherActions.loadWeatherSuccessful({ weather })),
          catchError((err) =>
            of(weatherActions.loadWeatherError({ details: err }))
          )
        )
      )
    )
  );
}
