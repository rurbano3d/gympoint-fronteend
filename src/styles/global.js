import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import: url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus{
    outline: 0,
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button, select {
    font: 14px 'Roboto', sans-serif;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button {
    cursor: pointer;
  }
  input{
    padding: 0 15px 0;
    border-radius: 5px;
    border: 1px solid #dddddd;
    color: #666666;
  }

  table{
    width:100%;
    text-align:left;
  }

  thead tr th {
    padding:20px;
    font-size:16px;
    color:#444444;
  }

  tbody tr{
    td{
      padding:15px 0 15px 20px;
      font-size:16px;
      color:#666666;
      border-bottom: 1px solid #eee;

      div{
        span{
          margin-left:30px;
        }
      }
    }
    &:last-child td{
      border-bottom: none;
    }
  }

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

 .top{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 78%;
    margin: 25px 0 25px 0;
  }

  .left{
    font-size: 24px;
    font-weight: bold;
  }

  form span{
    color: #ee4d63;
    align-self: flex-start;
    margin:-5px 0 0 0;
    font-weight: bold;
  }
  #blockInput input {
    background-color: #f5f5f5;
  }

`;
