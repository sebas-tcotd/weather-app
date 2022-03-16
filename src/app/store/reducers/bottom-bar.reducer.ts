import { createReducer, on } from '@ngrx/store';
import { MoreDetailsComponent } from 'src/app/components/more-details/more-details.component';
import { SearchInputComponent } from 'src/app/components/search-input/search-input.component';
import { ComponentType } from 'src/app/constants/componentType';
import { toggleToDetails, toggleToSearch } from '../actions/bottom-bar.actions';

export interface BottomBarState {
  component: ComponentType;
}

const bottomBarInitialState: BottomBarState = {
  component: ComponentType.MoreDetails,
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
