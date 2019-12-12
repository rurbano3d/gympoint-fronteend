import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.level !== 0) {
      toast.error('Usuário não é administrador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/alunos');
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Validation fails':
        error = 'Dados incorretos!';
        break;
      case 'User not found':
        error = 'Usuário incorreto!';
        break;
      case 'Password does not match':
        error = 'Senha incorreta!';
        break;
      default:
        error = 'Contate o suporte!';
    }
    toast.error(`${error}`);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
