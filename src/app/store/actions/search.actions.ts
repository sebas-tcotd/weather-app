import { createAction, props } from '@ngrx/store';

export const performSearch = createAction(
  '[Search] PERFORM_SEARCH',
  props<{ searchWord: string }>()
);

export const resetSearch = createAction('[Search] RESET_SEARCH')
