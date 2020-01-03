import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { studentRequest } from '~/store/modules/student/actions';
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

export default function Cadastrar() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, age, weight, height }) {
    dispatch(studentRequest(name, email, age, weight, height));
  }

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>Cadastro de aluno</strong>
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
        <Form id="formStudent" schema={schema} onSubmit={handleSubmit}>
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
              <CurrencyInput name="weight" precision="3" />
            </div>
            <div>
              <label>ALTURA</label>
              <InputMask name="height" inputMask="9.99" />
            </div>
          </div>
        </Form>
      </Content>
    </div>
  );
}
