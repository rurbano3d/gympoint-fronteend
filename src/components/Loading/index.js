import React from 'react';

import { Ellipsis } from 'react-awesome-spinners';
import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <Ellipsis color="#ee4d63" />
    </Container>
  );
}
