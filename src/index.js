import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/styleGlobal'

import Routes from './routes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Routes /> <GlobalStyle />
  </>
);


