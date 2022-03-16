import { createReducer, on } from '@ngrx/store';
import { WeatherGroups } from 'src/app/constants/weatherGroups';
import { setWeatherBackground } from '../actions';

export interface UIState {
  background: WeatherGroups;
}

const UiInicialState: UIState = {
  background: WeatherGroups.none,
};

export const UIStateReducer = createReducer(
  UiInicialState,
  on(setWeatherBackground, (state, { category }) => ({
    ...state,
    background: category,
  }))
);
