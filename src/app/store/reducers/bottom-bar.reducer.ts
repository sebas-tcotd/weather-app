import { createReducer, on } from '@ngrx/store';
import { ComponentType } from 'src/app/constants/componentType';
import { toggleToDetails, toggleToSearch } from '../actions/bottom-bar.actions';

export interface BottomBarState {
  component: ComponentType;
}

const bottomBarInitialState: BottomBarState = {
  component: ComponentType.SearchInput,
};

export const BottomBarReducer = createReducer(
  bottomBarInitialState,
  on(toggleToSearch, (state) => ({
    ...state,
    component: ComponentType.SearchInput,
  })),
  on(toggleToDetails, (state) => ({
    ...state,
    component: ComponentType.MoreDetails,
  }))
);
