import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Alunos from '~/pages/Alunos';
import Planos from '~/pages/Planos';
import Matriculas from '~/pages/Matriculas';
import Pedidos from '~/pages/Pedidos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/alunos" exact component={Alunos} isPrivate />
      <Route path="/planos" exact component={Planos} isPrivate />
      <Route path="/matriculas" exact component={Matriculas} isPrivate />
      <Route path="/pedidos" exact component={Pedidos} isPrivate />
    </Switch>
  );
}
