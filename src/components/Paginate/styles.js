import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 45px;
  }
  li {
    display: inline-block;
    padding: 0 20px 0 20px;
    color: #444444;
    font-weight: bold;
    cursor: pointer;
  }
  .active {
    display: flex;
    align-items: center;
    background: #ee4d64;
    height: 45px;
    color: #fff;
  }
`;
