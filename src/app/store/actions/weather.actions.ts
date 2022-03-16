import { createAction, props } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.model';

export const loadWeather = createAction(
  '[Weather API] LOAD_WEATHER',
  props<{ payload: string }>()
);

export const loadWeatherSuccessful = createAction(
  '[Weather API] LOAD_SUCCESSFUL',
  props<{ weather: Weather }>()
);

export const loadWeatherError = createAction(
  '[Weather API] LOAD_FAILED',
  props<{ details: any }>()
);
