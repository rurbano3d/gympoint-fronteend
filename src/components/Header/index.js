import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '~/assets/iconeGym.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile, ItemLink, Logo } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <Logo>
            <img src={logo} alt="Gym Point" />
            <span>GYMPOINT</span>
          </Logo>
          <ItemLink to="/alunos" exact activeClassName="active">
            ALUNOS
          </ItemLink>
          <ItemLink to="/planos" exact activeClassName="active">
            PLANO
          </ItemLink>
          <ItemLink to="/matriculas" exact activeClassName="active">
            MATRÍCULAS
          </ItemLink>
          <ItemLink to="/pedidos" exact activeClassName="active">
            PEDIDOS DE AUXÍLIO
          </ItemLink>
        </nav>
        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
