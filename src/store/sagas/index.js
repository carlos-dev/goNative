import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import api from '../../services/api';
import {navigate} from '../../services/navigation';

import * as LoginActions from '../actions/login';
import * as RepositoriesActions from '../actions/repositories';

function* login(action) {
  try {
    const {user} = action.payload;

    yield call(api.get, `/users/${user}`);
    yield put(LoginActions.loginSuccess(user));

    navigate('Repositories');
  } catch (error) {
    yield put(LoginActions.loginFailure());
    console.log(error);
  }
}

function* loadRepositories() {
  try {
    const {username} = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);
    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('LOAD_REPOSITORIES_REQUEST', loadRepositories),
  ]);
}
