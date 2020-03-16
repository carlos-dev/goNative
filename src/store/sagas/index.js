import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from '../../services/api';

import * as LoginActions from '../actions/login';
function* login(action) {
  console.log(action);

  try {
    const {user} = action.payload;

    yield call(api.get, `/users/${user}`);
    yield put(LoginActions.loginSuccess(user));

    // navigation.navigate('Repositories');
  } catch (error) {
    yield put(LoginActions.loginFailure());
    console.log(error);
  }
}

export default function* rootSaga() {
  return yield all([takeLatest('LOGIN_REQUEST', login)]);
}
