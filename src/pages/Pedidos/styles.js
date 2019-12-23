import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  background: #fff;
  width: 78%;
  height: 100%;
  border-radius: 5px;

  table tbody span {
    color: #4d85ee;
    cursor: pointer;
  }
`;

export const Question = styled.div`
  font-size: 16px;
  color: #666666;
  line-height: 1.26;
`;

export const Answer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    strong {
      margin: 10px 0 0 0;
    }
    textarea {
      margin: 10px 0 0 0;
      border: 1px solid #dddddd;
      background: none;
      width: 100%;
      height: 127px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0 0 0;
      width: 100%;
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
    }
  }
`;
