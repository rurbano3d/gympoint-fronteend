import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { planRequest } from '~/store/modules/plan/actions';
import Button from '~/components/Button';
import ButtonLink from '~/components/ButtonLink';

import { Right, Content } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Título obrigatório'),
  duration: Yup.string().required('Duração obrigatória'),
  price: Yup.number().required('Valor obrigatório'),
});

export default function CadastrarPlano() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [total, setTotal] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    setTotal(duration * price);
  }, [duration, price]);

  function handleSubmit({ title }) {
    dispatch(planRequest(title, duration, price));
  }

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>Cadastro de planos</strong>
        </div>
        <Right>
          <ButtonLink to="/planos" color="#cccccc">
            <MdKeyboardArrowLeft size={20} color="#fff" />
            <span>VOLTAR</span>
          </ButtonLink>
          <Button type="submit" form="formPlans">
            <MdCheck size={20} color="#fff" />
            <span>{loading ? 'Carregando' : 'SALVAR'}</span>
          </Button>
        </Right>
      </div>
      <Content>
        <Form id="formPlans" schema={schema} onSubmit={handleSubmit}>
          <label>TÍTULO DO PLANO</label>
          <Input name="title" type="text" />
          <div>
            <div>
              <label>DURAÇÃO (em meses)</label>
              <Input
                name="duration"
                type="text"
                onChange={e => setDuration(e.target.value)}
              />
            </div>
            <div>
              <label>PREÇO MENSAL</label>
              <Input
                name="price"
                type="number"
                onChange={e => setPrice(e.target.value)}
              />
            </div>
            <div id="blockInput">
              <label>PREÇO TOTAL</label>
              <Input name="priceTotal" value={total} type="number" disabled />
            </div>
          </div>
        </Form>
      </Content>
    </div>
  );
}
