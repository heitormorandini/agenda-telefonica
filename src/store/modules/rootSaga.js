import { all } from 'redux-saga/effects';

import agenda from './agenda/sagas';

export default function* rootSaga() {
  return yield all([
    agenda,
  ])
}