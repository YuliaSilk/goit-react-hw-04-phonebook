import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    main: '#132A13',
    backgraund: '#081c15',
    header:'#d9ed92',
    acent: '#fff',
    error: '#d90429',
    text:'#ECF39E',
    border: '#90A955',
    inputColor: '#31572C',
  },

  radii: {
    md: '15px',
  },
  // box-shadow: 1px 1px 3px 2px #ad0467;
spacing: value => `${value * 4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
