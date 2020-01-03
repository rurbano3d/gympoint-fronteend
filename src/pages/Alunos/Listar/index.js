import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAdd } from 'react-icons/md';

import api from '~/services/api';
import ButtonLink from '~/components/ButtonLink';
import Loading from '~/components/Loading';
import Paginate from '~/components/Paginate';
import Alert from '~/util/alert';
import { studentDelete } from '~/store/modules/student/actions';

import { Right, Content, ItemLink } from './styles';
// eslint-disable-next-line react/prefer-stateless-function
export default function ListarAlunos() {
  const [students, setStudents] = useState({});
  const [search, setSearch] = useState('');
  const [page, setPage] = useState('1');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function handleSearch(e) {
    setLoading(true);
    setSearch(e.target.value);
  }
  function handlePage(data) {
    setPage(data.selected + 1);
  }
  function handleDelete(id) {
    Alert.delete().then(result => {
      if (result.value) {
        dispatch(studentDelete(id));
      }
    });
  }

  console.tron.log(page);
  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', {
        params: { q: search, page },
      });
      setStudents(response.data);
      setLoading(false);
    }
    loadStudents();
  }, [page, search]);
  return (
    <div className="container">
      <div className="top">
        <div className="left">
          <strong>Gerenciando alunos</strong>
        </div>
        <Right>
          <ButtonLink to="/alunos/novo">
            <MdAdd size={20} color="fff" />
            <span>CADASTRAR</span>
          </ButtonLink>
          <input
            type="text"
            name="name"
            value={search}
            onChange={handleSearch}
            placeholder="Buscar aluno"
          />
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
                <th>NOME</th>
                <th>E-MAIL</th>
                <th width="10%">IDADE</th>
                <th width="20%" />
              </tr>
            </thead>

            <tbody>
              {students.length ? (
                students.map(s => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                    <td align="center">{s.age}</td>
                    <td>
                      <div>
                        <ItemLink to={`/alunos/${s.id}/editar`} exact>
                          editar
                        </ItemLink>
                        <span onClick={() => handleDelete(s.id)}>apagar</span>
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
      </Content>
    </div>
  );
}
