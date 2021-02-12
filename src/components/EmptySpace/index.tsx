import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <h1>Oops...</h1>
    <p>
      Está muito vazio por aqui. Que tal começar{' '}
      <Link to="/import">importando um arquivo</Link>?
    </p>
  </Container>
);

export default Header;
