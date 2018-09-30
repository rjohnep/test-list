import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectFiltersState = (state) => state.get('filters', initialState);

const makeSelectFilters = createSelector(
  selectFiltersState,
  (filters) => filters.entities,
);

const makeSelectHasActiveFilters = createSelector(
  selectFiltersState,
  (filters) => filters.hasActiveFilters,
);

const makeSelectActiveFilters = createSelector(
  selectFiltersState,
  (filters) => filters.active,
);

const makeSelectActiveColorsFilter = createSelector(
  selectFiltersState,
  (filters) => filters.activeColors,
);

export {
  makeSelectFilters,
  makeSelectHasActiveFilters,
  makeSelectActiveFilters,
  makeSelectActiveColorsFilter,
};
