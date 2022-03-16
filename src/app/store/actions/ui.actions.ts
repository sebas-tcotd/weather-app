import { createAction, props } from '@ngrx/store';
import { WeatherGroups } from 'src/app/constants/weatherGroups';

export const setWeatherBackground = createAction(
  '[UI] SET_WEATHER_BACKGROUND',
  props<{ category: WeatherGroups }>()
);
