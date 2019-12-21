import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { planUpdate } from '~/store/modules/plan/actions';
import api from '~/services/api';
import Button from '~/components/Button';
import ButtonLink from '~/components/ButtonLink';

import { Right, Content } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Título obrigatório'),
  duration: Yup.string().required('Duração obrigatória'),
  price: Yup.number().required('Valor obrigatório'),
});

export default function EditarPlanos({ match }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [plan, setPlan] = useState({});
  const [total, setTotal] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');

  const { id } = match.params;

  useEffect(() => {
    if (id) {
      async function loadPlan() {
        const response = await api.get(`plans/${id}`);
        setPlan(response.data);
      }
      setTotal(plan.duration * plan.price);
      loadPlan();
    }
  }, [id, plan.duration, plan.price]);

  useEffect(() => {
    if (!duration) {
      setDuration(plan.duration);
    }
    if (!price) {
      setPrice(plan.price);
    }
    setTotal(duration * price);
  }, [duration, plan.duration, plan.price, price]);

  function handleSubmit({ title, duration, price }) {
    dispatch(planUpdate(id, title, duration, price));
  }

  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>Edição de plano</strong>
        </div>
        <Right>
          <ButtonLink to="/planos" color="#cccccc">
            <MdKeyboardArrowLeft size={20} color="#fff" />
            <span>VOLTAR</span>
          </ButtonLink>
          <Button type="submit" form="formPlan">
            <MdCheck size={20} color="#fff" />
            <span>{loading ? 'Carregando' : 'SALVAR'}</span>
          </Button>
        </Right>
      </div>
      <Content>
        <Form
          id="formPlan"
          schema={schema}
          onSubmit={handleSubmit}
          initialData={plan}
        >
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
              <Input name="priceTotal" type="number" value={total} disabled />
            </div>
          </div>
        </Form>
      </Content>
    </div>
  );
}
