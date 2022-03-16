import { createReducer, on } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.model';
import { loadWeatherSuccessful } from '../actions';

export interface WeatherState {
  temperature: number;
  city: string;
  country: string;
  description: string;
  pristine: boolean;
}

const weatherInitialState: WeatherState = {
  temperature: NaN,
  city: '',
  country: '',
  description: '',
  pristine: true,
};

export const weatherReducer = createReducer(
  weatherInitialState,
  on(loadWeatherSuccessful, (state, { weather }) => ({
    ...state,
    temperature: weather.temperature,
    city: weather.city,
    country: weather.country,
    description: weather.description,
    pristine: false,
  }))
);
