import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import ButtonLink from '~/components/ButtonLink';
import Loading from '~/components/Loading';
import Paginate from '~/components/Paginate';
import Alert from '~/util/alert';
import { planDelete } from '~/store/modules/plan/actions';

import { Right, Content, ItemLink } from './styles';
// eslint-disable-next-line react/prefer-stateless-function
export default function ListarPlanos() {
  const [plans, setPlans] = useState({});
  const [page, setPage] = useState('1');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  function handlePage(data) {
    setPage(data.selected + 1);
  }
  function handleDelete(id) {
    Alert.delete().then(result => {
      if (result.value) {
        dispatch(planDelete(id));
      }
    });
  }
  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans', {
        params: { page },
      });
      setPlans(response.data);
      setLoading(false);
    }
    loadPlans();
  }, [page]);
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>Gerenciando planos</strong>
        </div>
        <Right>
          <ButtonLink to="/planos/novo">
            <MdAdd size={20} color="fff" />
            <span>CADASTRAR</span>
          </ButtonLink>
        </Right>
      </div>
      <Content>
        {' '}
        {loading ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th>TÌTULO</th>
                <th>DURAÇÃO</th>
                <th>VALOR p/ MÊS</th>
                <th />
                <th />
              </tr>
            </thead>

            <tbody>
              {plans.length ? (
                plans.map(p => (
                  <tr key={p.id}>
                    <td>{p.title}</td>
                    <td>
                      {p.duration}
                      {p.duration <= 1 ? ' mês' : ' meses'}
                    </td>
                    <td>R$ {p.price}</td>
                    <td>
                      <ItemLink to={`/planos/${p.id}/editar`} exact>
                        editar
                      </ItemLink>
                    </td>
                    <td>
                      <span onClick={() => handleDelete(p.id)}>apagar</span>
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
      </Content>
    </div>
  );
}
