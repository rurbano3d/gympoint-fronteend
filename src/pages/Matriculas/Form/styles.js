import styled from 'styled-components';
import { darken, lighten } from 'polished';
import AsyncSelect from 'react-select/async';

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
    select {
      background: none;
      padding: 0 15px 0;
      height: 45px;
      border-radius: 5px;
      font-size: 16px;
      border: 1px solid #dddddd;
      color: #999999;
    }
    > div {
      display: flex;
      flex-direction: row;
      margin: 10px 0 0 0;
      div {
        input {
          width: 198px;
          margin:5px 32px 0 0;

        }
        select{
          width: 198px;
          margin:5px 32px 0 0;

        }
        }
      }
    }
  }
  #totalPrice input {
    background-color: #f5f5f5;
  }
`;
export const AsyncSelectCustom = styled(AsyncSelect)`
  display: flex;
  align-items: center;
  .react-select__control {
    width: 100%;
    height: 45px;
  }
  .react-select__control:active {
    border: 1px solid red;
  }

  .react-select__value-container {
    display: flex;
    align-items: center;
    font-size: 16px;
    height: 45px;
    color: #999999;
  }
  .react-select__input {
    position: absolute;
    top: 0;
    color: #999999;
    height: 45px;
  }
  .react-select__placeholder {
    display: flex;
    align-items: center;
    color: #999999;
    height: 45px;
  }
  .react-select__single-value {
    display: flex;
    align-items: center;
    color: #999999;
    margin-top: 5px;
    height: 45px;
  }
  .react-select__option:hover {
    background: ${lighten(0.3, '#ee4d63')};
  }
  .react-select__option {
    background: #fff;
    color: #999999;
  }
  .react-select__menu-list:active {
    color: #999999;
    background: #fff;
  }
`;
