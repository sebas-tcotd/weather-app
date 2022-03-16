import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/index';

export interface AppState {
  bottomBar: reducers.BottomBarState;
  search: reducers.SearchState;
  weather: reducers.WeatherState;
}

export const appReducers: ActionReducerMap<AppState> = {
  bottomBar: reducers.BottomBarReducer,
  search: reducers.searchReducer,
  weather: reducers.weatherReducer,
};
