import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background-color: #f1f1f1;
  }

  input{
    outline: 0;
    border:0
  }

`;
export default GlobalStyles;
