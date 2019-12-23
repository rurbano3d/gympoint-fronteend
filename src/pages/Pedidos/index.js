import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import api from '~/services/api';

import Loading from '~/components/Loading';
import Paginate from '~/components/Paginate';
import Modal from '~/components/Modal';

import { Content, Question, Answer } from './styles';

export default function Pedidos() {
  const schema = Yup.object().shape({
    answer: Yup.string().required('A resposta é obrigatória'),
  });

  const [orders, setOrders] = useState({});
  const [order, setOrder] = useState({});
  const [page, setPage] = useState('1');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  function handlePage(data) {
    setPage(data.selected + 1);
  }

  function showModalAnswer(order) {
    setOrder(order);
    setShowModal(!showModal);
  }

  async function handleSubmitAwswer(data, { resetForm }) {
    console.tron.log(data);
    try {
      await api.put(`help-orders/${order.id}/answer`, {
        answer: data.answer,
      });
      toast.success('Resposta enviada com sucesso');
      setShowModal(!showModal);
      resetForm();
    } catch (err) {
      toast.error('Ops, Erro ao responder');
    }
  }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('help-orders', {
        params: { page },
      });
      setOrders(response.data);
      setLoading(false);
    }
    loadOrders();
  }, [page]);
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>Pedidos de auxílio</strong>
        </div>
      </div>
      <Content>
        {' '}
        {loading ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>ALUNO</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {orders.length ? (
                orders.map(o => (
                  <tr key={o.id}>
                    <td>{o.student.name}</td>
                    <td>
                      <div>
                        <span onClick={() => showModalAnswer(o)}>
                          responder
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td />
                </tr>
              )}
            </tbody>
          </table>
        )}
        <Paginate pageCount={5} onPageChange={handlePage} />
        <Modal
          title="PERGUNTA DO ALUNO"
          isShow={showModal}
          onClose={() => setShowModal(!showModal)}
          width="450px"
        >
          <Question>{order.question}</Question>
          <Answer>
            <Form schema={schema} onSubmit={handleSubmitAwswer}>
              <strong>SUA RESPOSTA</strong>
              <Input multiline name="answer" />
              <button type="submit">Responder aluno</button>
            </Form>
          </Answer>
        </Modal>
      </Content>
    </div>
  );
}
