import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { WeatherState } from '../reducers';

export const selectWeatherFeature = (state: AppState) => state.weather;

export const selectWeather = createSelector(
  selectWeatherFeature,
  (state: WeatherState) => state
);
