import styled from 'styled-components';
import { darken } from 'polished';

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  }

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
    margin-left:10px;
    &:hover {
      background: ${darken(0.05, '#ee4d63')};
    }

    span {
      display: flex;
      align-self: center;
      padding-left: 10px;
    }
  }

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

  form {
    padding: 30px;
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin: 5px 0 5px 0;
    }

    input {
      height: 45px;
      margin-bottom: 17px;
    }

    > div {
      display: flex;
      flex-direction: row;
      div {
        display: flex;
        flex-direction: column;

        input {
          width: 270px;
          margin-right: 38px;
        }
      }
    }
  }
`;
