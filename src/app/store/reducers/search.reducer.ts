import { createReducer, on } from '@ngrx/store';
import { performSearch, resetSearch } from '../actions';

export interface SearchState {
  searchWord: string;
}

const searchInitialState: SearchState = {
  searchWord: '',
};

export const searchReducer = createReducer(
  searchInitialState,
  on(performSearch, (state, { searchWord }) => ({ ...state, searchWord })),
  on(resetSearch, () => ({ searchWord: '' }))
);
