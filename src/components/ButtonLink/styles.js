import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const CustomButtonLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 142px;
  height: 36px;
  background: ${props => props.color};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;
  &:hover {
    background: ${props => darken(0.05, props.color)};
  }

  span {
    display: flex;
    align-self: center;
    padding-left: 5px;
  }
`;
