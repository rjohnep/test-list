import { createAction } from 'redux-actions';

export const addProductsRequest = createAction('listing:add_products_request');
export const addProductsReceive = createAction('listing:add_products_receive');

export const startLoader = createAction('listing:start_loader');
export const stopLoader = createAction('listing:stop_loader');
