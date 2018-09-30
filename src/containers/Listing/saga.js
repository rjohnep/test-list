import {
  call, put, fork,
  takeLatest,
} from 'redux-saga/effects';

import BaseSagaClass from 'utils/saga/BaseSagaClass';

import * as actions from './actions';
import fakeProducts from './products';

const fakeRequest = () => new Promise((resolve) => setTimeout(
  () => resolve(fakeProducts),
  1000,
));

export class ListingSagaWorker extends BaseSagaClass {
  static* getProducts() {
    try {
      yield put(actions.startLoader());

      const products = yield call(fakeRequest);

      yield put(actions.addProductsReceive(products));
    } catch (error) {
      yield fork(
        ListingSagaWorker.catchError,
        {
          error,
          content: 'Oops! Something went wrong with products fetching.',
        }
      );
    } finally {
      yield put(actions.stopLoader());
    }
  }
}

export default function* listingSagaWatcher() {
  yield takeLatest(actions.addProductsRequest, ListingSagaWorker.getProducts);
}
