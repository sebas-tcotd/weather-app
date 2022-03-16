import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { SearchState } from '../reducers';

export const selectSearchFeature = (state: AppState) => state.search;

export const searchSelector = createSelector(
  selectSearchFeature,
  (state: SearchState) => state.searchWord
);
