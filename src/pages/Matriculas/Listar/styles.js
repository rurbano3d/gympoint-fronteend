import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  input {
    height: 36px;
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  background: #fff;
  width: 78%;
  height: 100%;
  border-radius: 5px;

  table tbody span {
    color: #de3b3b;
    cursor: pointer;
  }
`;
export const ItemLink = styled(NavLink)`
  color: #4d85ee;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;
