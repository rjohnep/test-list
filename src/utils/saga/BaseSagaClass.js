import { fork } from 'redux-saga/effects';

export default class BaseSagaClass {
  static* catchError(props, callback) {
    // TODO: SENTRY OR SOMETHING ELSE
    console.log(props);

    if (typeof callback === 'function') {
      yield fork(callback);
    }
  }
}
