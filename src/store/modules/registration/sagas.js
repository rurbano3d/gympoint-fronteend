import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { registrationSuccess, registrationFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* registrationRequest({ payload }) {
  try {
    const { student_id, plan_id, start_date } = payload;

    const response = yield call(api.post, 'registrations', {
      student_id,
      plan_id,
      start_date,
    });

    yield put(registrationSuccess(response.data));

    history.push('/matriculas');
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
    yield put(registrationFailure());
  }
}

export function* registrationUpdate({ payload }) {
  try {
    const { id, student_id, plan_id, start_date } = payload;

    const response = yield call(api.put, `registrations/${id}`, {
      student_id,
      plan_id,
      start_date,
    });

    yield put(registrationSuccess(response.data));

    history.push('/matriculas');
  } catch (err) {
    let error = '';
    switch (err.response.data.error) {
      case 'Validation fails':
        error = 'Dados incorretos!';
        break;
      default:
        error = 'Contate o suporte!';
    }
    toast.error(`${error}`);
    yield put(registrationFailure());
  }
}

export function* registrationDelete({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `registrations/${id}`);

    toast.success('Plano removido com sucesso');
    yield put(registrationSuccess(response.data));
    history.push('/matriculas');
  } catch (err) {
    toast.error('Deu erro, por favor contate o suporte!');
    yield put(registrationFailure());
  }
}

export default all([
  takeLatest('@registration/REGISTRATION_REQUEST', registrationRequest),
  takeLatest('@registration/REGISTRATION_UPDATE', registrationUpdate),
  takeLatest('@registration/REGISTRATION_DELETE', registrationDelete),
]);
