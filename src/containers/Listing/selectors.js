import { createSelector } from 'reselect';

import { makeSelectActiveFilters } from 'containers/Filters/selectors';

import { initialState } from './reducer';

const selectListingState = (state) => state.get('listing', initialState);

const makeSelectProducts = createSelector(
  selectListingState,
  makeSelectActiveFilters,
  // (listing, filter) => filter.size && listing.filterBy(filter) || listing.entities,
  (listing, filters) => listing.entities,
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
