import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { BottomBarState } from '../reducers';

export const selectBottomBarFeature = (state: AppState) => state.bottomBar;

export const bottomBarSelector = createSelector(
  selectBottomBarFeature,
  (state: BottomBarState) => state.component
);
