import { createSelector } from 'reselect';

import { makeSelectHasActiveFilters, makeSelectActiveFilters } from 'containers/Filters/selectors';

import { initialState } from './reducer';

const selectListingState = (state) => state.get('listing', initialState);

const makeSelectProducts = createSelector(
  selectListingState,
  makeSelectHasActiveFilters,
  makeSelectActiveFilters,
  (listing, isFiltersActive, filters) => isFiltersActive && listing.filterBy(filters) || listing.entities,
);

const makeSelectIsLoading = createSelector(
  selectListingState,
  (listing) => !!listing.isLoading,
);

export {
  selectListingState,
  makeSelectProducts,
  makeSelectIsLoading,
};
