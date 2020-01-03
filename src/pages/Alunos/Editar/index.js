import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { studentUpdate } from '~/store/modules/student/actions';
import api from '~/services/api';
import Button from '~/components/Button';
import ButtonLink from '~/components/ButtonLink';
import InputMask from '~/components/InputMask';
import CurrencyInput from '~/components/CurrencyInput';

import { Right, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email obrigatório'),
  age: Yup.number().typeError('Idade obrigatória'),
  weight: Yup.string().required('Peso obrigatória'),
  height: Yup.string().required('Altura obrigatória'),
});

export default function EditarAlunos({ match }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [student, setStudent] = useState({});
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const { id } = match.params;

  useEffect(() => {
    if (id) {
      async function loadStudent() {
        const response = await api.get(`students/${id}`);
        setStudent(response.data);
        setHeight(student.height);
        setWeight(student.weight);
      }

      loadStudent();
    }
  }, [id, student.height, student.weight]);

  function handleSubmit({ name, email, age, weight, height }) {
    dispatch(studentUpdate(id, name, email, age, weight, height));
  }

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>Edição de aluno</strong>
        </div>
        <Right>
          <ButtonLink to="/alunos" color="#cccccc">
            <MdKeyboardArrowLeft size={20} color="#fff" />
            <span>VOLTAR</span>
          </ButtonLink>
          <Button type="submit" form="formStudent">
            <MdCheck size={20} color="#fff" />
            <span>{loading ? 'Carregando' : 'SALVAR'}</span>
          </Button>
        </Right>
      </div>
      <Content>
        <Form
          id="formStudent"
          schema={schema}
          onSubmit={handleSubmit}
          initialData={student}
        >
          <label>NOME COMPLETO</label>
          <Input name="name" type="text" placeholder="John Doe" />
          <label>ENDEREÇO DE E-MAIL</label>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <div>
            <div>
              <label>IDADE</label>
              <Input name="age" type="number" />
            </div>
            <div>
              <label>PESO (em kg)</label>
              <CurrencyInput
                name="weight"
                precision="3"
                value={weight}
                onChangeEvent={e => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>ALTURA</label>
              <InputMask
                name="height"
                inputMask="9.99"
                value={height}
                onChange={e => setHeight(e.target.value)}
              />
            </div>
          </div>
        </Form>
      </Content>
    </div>
  );
}
EditarAlunos.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
