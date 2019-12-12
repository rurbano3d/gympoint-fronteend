import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gym Point" />
          <Link to="/alunos">ALUNOS</Link>
          <Link to="/planos">PLANOS</Link>
          <Link to="/matricualas">MATRÍCULAS</Link>
          <Link to="/pedidos">PEDIDOS DE AUXÍLIO</Link>
        </nav>
      </Content>
    </Container>
  );
}
