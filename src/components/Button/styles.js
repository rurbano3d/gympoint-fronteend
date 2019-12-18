import styled from 'styled-components';
import { darken } from 'polished';

export const CustomButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 142px;
    height: 36px;
    background: #ee4d63;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.05, '#ee4d63')};
    }

    span {
      display: flex;
      align-self: center;
      padding-left: 10px;
    }
  }
`;
