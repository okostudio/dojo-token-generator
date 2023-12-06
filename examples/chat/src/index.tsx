import './index.css';
import { Config } from './config';


import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';

import App from './App';
import theme from './app/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
console.log(process.env.REACT_APP_GENERATE_TOKEN_URL)
console.log(Config)
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
);
