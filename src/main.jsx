import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './hooks/auth'; //autenticação

import { ThemeProvider } from 'styled-components'

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
