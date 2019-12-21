import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';

import { addMonths } from 'date-fns';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';

import {
  registrationRequest,
  registrationUpdate,
} from '~/store/modules/registration/actions';
import Button from '~/components/Button';
import ButtonLink from '~/components/ButtonLink';
import DateInput from '~/components/DateInput';

import { formatDate } from '~/util';

import api from '~/services/api';

import { Right, Content } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

const schema = Yup.object().shape({
  student_id: Yup.string().required('Aluno obrigatório'),
  plan_id: Yup.string().required('Plano obrigatória'),
  start_date: Yup.date().required('Data de início obrigatório'),
});

export default function FormMatriculas({ match }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [students, setStudents] = useState([]);
  const [registration, setRegistration] = useState([]);
  const [plans, setPlans] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(null);
  const [planSelected, setPlanSelected] = useState(null);
  const [studentSelected, setStudentSelected] = useState(null);
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [priceTotal, setPriceTotal] = useState(null);

  const { id } = match.params;

  useEffect(() => {
    if (id) {
      async function loadRegistration() {
        const response = await api.get(`registrations/${id}`);
        setRegistration(response.data);
      }
      loadRegistration();
    }
  }, [id, registration.student]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');
      const newStudents = response.data.map(s => ({
        id: s.id,
        title: s.name,
      }));
      setStudents(newStudents);
    }

    async function loadPlans() {
      const response = await api.get('plans');
      setPlans(response.data);
    }
    loadPlans();
    loadStudents();
  }, []);
  useEffect(() => {
    async function loadPlanSelected() {
      const response = await api.get(`plans/${planSelected}`);
      setDuration(response.data.duration);
      setPrice(response.data.price);
    }
    loadPlanSelected();
  }, [planSelected]);
  useMemo(() => {
    if (planSelected && duration) {
      const setNewDate = addMonths(startDate, duration);
      setEndDate(setNewDate);
    }
    setPriceTotal(price * duration);
  }, [planSelected, startDate]); // eslint-disable-line

  function handleSubmit({ student_id, plan_id, start_date }) {
    if (id) {
      dispatch(registrationUpdate(id, student_id, plan_id, start_date));
    } else {
      dispatch(registrationRequest(student_id, plan_id, start_date));
    }
  }
  console.tron.log(studentSelected);
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>
            {id ? 'Edição de Matrícula' : 'Cadastro de Matrícula'}
          </strong>
        </div>
        <Right>
          <ButtonLink to="/matriculas" color="#cccccc">
            <MdKeyboardArrowLeft size={20} color="#fff" />
            <span>VOLTAR</span>
          </ButtonLink>
          <Button type="submit" form="formRegistration">
            <MdCheck size={20} color="#fff" />
            <span>{loading ? 'Carregando' : 'SALVAR'}</span>
          </Button>
        </Right>
      </div>
      <Content>
        <Form
          id="formRegistration"
          schema={schema}
          onSubmit={handleSubmit}
          initialData={registration}
        >
          <label>ALUNO</label>
          <Select
            name="student_id"
            options={students}
            placeholder="Buscar aluno"
            onChange={e => setStudentSelected(e.target.value)}
            value={studentSelected || registration.student_id}
          />
          <div>
            <div>
              <label>PLANO</label>
              <Select
                name="plan_id"
                options={plans}
                placeholder="Selecione o plano"
                onChange={e => setPlanSelected(e.target.value)}
                value={planSelected || registration.plan_id}
              />
            </div>
            <div>
              <label>DATA DE INÍCIO</label>
              <DateInput
                name="start_date"
                placeholder="Escolha a data"
                onChange={date => setStartDate(date)}
                value={registration.start_date}
              />
            </div>
            <div id="totalPrice">
              <label>DATA DE TÉRMINO</label>
              <DatePicker
                name="end_date"
                selected={endDate}
                dateFormat="dd/MM/yyyy"
                value={endDate || formatDate(registration.end_date)}
                disabled
              />
            </div>
            <div id="totalPrice">
              <label>VALOR FINAL</label>
              <Input
                name="priceTotal"
                type="number"
                value={priceTotal || registration.price}
                disabled
              />
            </div>
          </div>
        </Form>
      </Content>
    </div>
  );
}
