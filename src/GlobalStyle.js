import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #e5e9f0;
    color: #3b4252;
    font: 400 14px/1.15 'Roboto', sans-serif;
    min-height: 100vh;
    overflow: hidden auto;
    text-rendering: optimizeLegibility;
  }

  input,
  button,
  textarea,
  select {
    font: 400 16px/1 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: vertical;
  }

  li {
    list-style-type: none;
  }
`;
