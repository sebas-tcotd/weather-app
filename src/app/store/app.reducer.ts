import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/index';

export interface AppState {
  bottomBar: reducers.BottomBarState;
  search: reducers.SearchState;
  weather: reducers.WeatherState;
  ui: reducers.UIState;
}

export const appReducers: ActionReducerMap<AppState> = {
  bottomBar: reducers.BottomBarReducer,
  search: reducers.searchReducer,
  weather: reducers.weatherReducer,
  ui: reducers.UIStateReducer,
};
