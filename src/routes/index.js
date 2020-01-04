import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import ListarAlunos from '~/pages/Alunos/Listar';
import CadastrarAlunos from '~/pages/Alunos/Cadastrar';
import EditarAlunos from '~/pages/Alunos/Editar';
import ListarPlanos from '~/pages/Planos/Listar';
import CadastrarPlanos from '~/pages/Planos/Cadastrar';
import EditarPlanos from '~/pages/Planos/Editar';
import ListarMatriculas from '~/pages/Matriculas/Listar';
import FormMatriculas from '~/pages/Matriculas/Form';
import Teste from '~/pages/Teste';

import Pedidos from '~/pages/Pedidos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/alunos" exact component={ListarAlunos} isPrivate />
      <Route path="/alunos/novo" exact component={CadastrarAlunos} isPrivate />
      <Route path="/alunos/:id/editar" component={EditarAlunos} isPrivate />
      <Route path="/planos" exact component={ListarPlanos} isPrivate />
      <Route path="/planos/novo" exact component={CadastrarPlanos} isPrivate />
      <Route path="/planos/:id/editar" component={EditarPlanos} isPrivate />
      <Route path="/matriculas" exact component={ListarMatriculas} isPrivate />
      <Route path="/teste" exact component={Teste} isPrivate />
      <Route
        path="/matriculas/novo"
        exact
        component={FormMatriculas}
        isPrivate
      />
      <Route
        path="/matriculas/:id/editar"
        component={FormMatriculas}
        isPrivate
      />
      <Route path="/pedidos" exact component={Pedidos} isPrivate />
    </Switch>
  );
}
