import { handleActions } from 'redux-actions';

import FiltersModel from './models/Filters';
import * as actions from './actions';
import filters from './filters';

const initialState = new FiltersModel(filters);

const filtersReducer = handleActions(
  {
    [actions.setFilter]: (state, { payload }) => state.setFilter(payload),
    [actions.removeFilter]: (state, { payload }) => state.removeFilter(payload),
  },
  initialState
);

export { initialState };
export default filtersReducer;
