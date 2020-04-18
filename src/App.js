import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Routes from './routes';

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes />
  </BrowserRouter>
);
