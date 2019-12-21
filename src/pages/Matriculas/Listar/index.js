import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import ButtonLink from '~/components/ButtonLink';
import Loading from '~/components/Loading';
import Paginate from '~/components/Paginate';
import Alert from '~/util/alert';
import { registrationDelete } from '~/store/modules/registration/actions';
import { formatDate } from '~/util';

import { Right, Content, ItemLink } from './styles';
// eslint-disable-next-line react/prefer-stateless-function
export default function ListarPlanos() {
  const [registrations, setRegistration] = useState({});
  const [page, setPage] = useState('1');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  function handlePage(data) {
    setPage(data.selected + 1);
  }
  function handleDelete(id) {
    Alert.delete().then(result => {
      if (result.value) {
        dispatch(registrationDelete(id));
      }
    });
  }
  useEffect(() => {
    async function loadRegistration() {
      const response = await api.get('registrations', {
        params: { page },
      });
      setRegistration(response.data);
      setLoading(false);
    }
    loadRegistration();
  }, [page]);
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>Gerenciando de matrículas</strong>
        </div>
        <Right>
          <ButtonLink to="/matriculas/novo">
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
                <th>ALUNO</th>
                <th>PLANO</th>
                <th>INÍCIO </th>
                <th>TÉRMINO</th>
                <th>ATIVA</th>
                <th />
                <th />
              </tr>
            </thead>

            <tbody>
              {registrations.length ? (
                registrations.map(e => (
                  <tr key={e.id}>
                    <td>{e.student.name}</td>
                    <td>{e.plan.title}</td>
                    <td>{formatDate(e.start_date)}</td>
                    <td>{formatDate(e.end_date)}</td>
                    <td>{e.active}</td>
                    <td>
                      <ItemLink to={`/matriculas/${e.id}/editar`} exact>
                        editar
                      </ItemLink>
                    </td>
                    <td>
                      <span onClick={() => handleDelete(e.id)}>apagar</span>
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
