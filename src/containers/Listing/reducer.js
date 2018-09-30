import { handleActions } from 'redux-actions';

import ListingModel from './models/Listing';
import * as actions from './actions';

const initialState = new ListingModel();

const listingReducer = handleActions(
  {
    [actions.addProductsReceive]: (state, { payload }) => state.addProducts(
      ListingModel.rawProductsToEntities(payload)
    ),

    [actions.startLoader]: (state) => state.setLoader(true),
    [actions.stopLoader]: (state) => state.setLoader(false),
  },
  initialState
);

export { initialState };
export default listingReducer;
