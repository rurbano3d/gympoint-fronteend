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
`;
export const ItemLink = styled(NavLink)`
  color: #4d85ee;
`;
