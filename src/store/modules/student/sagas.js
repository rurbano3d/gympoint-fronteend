import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { studentSuccess, studentFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* studentRequest({ payload }) {
  try {
    const { name, email, age, weight, height } = payload;

    const response = yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    yield put(studentSuccess(response.data));

    history.push('/alunos');
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
    yield put(studentFailure());
  }
}

export function* studentUpdate({ payload }) {
  try {
    const { id, name, email, age, weight, height } = payload;

    const response = yield call(api.put, `students/${id}`, {
      name,
      email,
      age,
      weight,
      height,
    });

    yield put(studentSuccess(response.data));

    history.push('/alunos');
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
    yield put(studentFailure());
  }
}

export function* studentDelete({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `students/${id}`);

    toast.success('Aluno removido com sucesso');
    yield put(studentSuccess(response.data));
    history.push('/');
  } catch (err) {
    toast.error('Deu erro, por favor contate o suporte!');
    yield put(studentFailure());
  }
}

export default all([
  takeLatest('@student/STUDENT_REQUEST', studentRequest),
  takeLatest('@student/STUDENT_UPDATE', studentUpdate),
  takeLatest('@student/STUDENT_DELETE', studentDelete),
]);
