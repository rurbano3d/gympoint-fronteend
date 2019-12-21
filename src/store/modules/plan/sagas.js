import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { planSuccess, planFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* planRequest({ payload }) {
  try {
    const { title, duration, price } = payload;

    const response = yield call(api.post, 'plans', {
      title,
      duration,
      price,
    });

    yield put(planSuccess(response.data));

    history.push('/planos');
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Validation fails':
        error = 'Dados incorretos!';
        break;
      case 'Student already exists':
        error = 'Este Aluno já possui cadastro';
        break;
      default:
        error = 'Contate o suporte!';
    }
    toast.error(`${error}`);
    yield put(planFailure());
  }
}

export function* planUpdate({ payload }) {
  try {
    const { id, title, duration, price } = payload;

    const response = yield call(api.put, `plans/${id}`, {
      title,
      duration,
      price,
    });

    yield put(planSuccess(response.data));

    history.push('/planos');
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Validation fails':
        error = 'Dados incorretos!';
        break;
      case 'Student already exists':
        error = 'Este email já esta sendo usado';
        break;
      default:
        error = 'Contate o suporte!';
    }
    toast.error(`${error}`);
    yield put(planFailure());
  }
}

export function* planDelete({ payload }) {
  console.tron.log(payload);
  try {
    const { id } = payload;

    const response = yield call(api.delete, `plans/${id}`);

    toast.success('Plano removido com sucesso');
    yield put(planSuccess(response.data));
    history.push('/planos');
  } catch (err) {
    toast.error('Deu erro, por favor contate o suporte!');
    yield put(planFailure());
  }
}

export default all([
  takeLatest('@plan/PLAN_REQUEST', planRequest),
  takeLatest('@plan/PLAN_UPDATE', planUpdate),
  takeLatest('@plan/PLAN_DELETE', planDelete),
]);
