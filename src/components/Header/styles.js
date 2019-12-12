import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding: 20px 35px 20px 35px;
  height: 64px;
  background-color: #fff;
  border: 1px solid #dddddd;

  nav {
    display: flex;
    align-items: center;


      img {
        height: 24px;
      }

      span {
        padding: 0 10px 0 10px;
        font-size: 15px;
        font-weight: bold;
        color: #ee4d64;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  border-right: 1px solid #dddddd;
`;
export const ItemLink = styled(NavLink)`
  font-weight: bold;
  padding: 0 20px 0 20px;
  color: #999999;
  &.active {
    color: #444444;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: -5px 0 0 0;

  strong {
    font-weight: bold;
    color: #666666;
  }
  button {
    background: none;
    margin: 2px 0 0 0;
    color: #de3b3b;
    border: 0;
  }
`;
