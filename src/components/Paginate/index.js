import React from 'react';

import Paginate from 'react-paginate';
import { Container } from './styles';

export default function Loading({ ...rest }) {
  return (
    <Container>
      <Paginate
        {...rest}
        previousLabel="Anterior"
        nextLabel="Próxima"
        pageRangeDisplayed={10}
        marginPagesDisplayed={5}
        activeClassName="active"
      />
    </Container>
  );
}
