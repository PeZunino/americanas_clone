import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
  body,input,button{
    font-family: 'Sans serif', serif;
    font-size: 16px;
  }
  body{
    background-color: #f1f1f1;
  }

  ul,li{
    list-style:none
  }
  a{
    text-decoration: none;
    
  }
  input{
    outline: 0;
    border:0;
    font-family: 'Arial', serif;
  }

`;
export default GlobalStyles;
