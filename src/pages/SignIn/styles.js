import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ee4d63;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  width: 360px;
  height: 448px;

  img {
    margin: 50px 0 20px 0;
    width: 153px;
    height: 100px;
  }
  form {
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin: 25px 0 5px 0;
    }
    input {
      width: 300px;
      height: 45px;
      border: 1px solid #dddddd;
      padding: 0 15px;
      border-radius: 5px;
      color: #666666;
    }
    span {
      color: #ee4d63;
      align-self: flex-start;
      margin: 2px 0 -10px 0;
      font-weight: bold;
    }

    button {
      margin: 15px 0 0;
      height: 44px;
      background: #ee4d63;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, '#ee4d63')};
      }
    }
  }
`;
