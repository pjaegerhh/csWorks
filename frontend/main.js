import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import 'nprogress/nprogress.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
//import { Provider as ReduxProvider } from 'react-redux';
//import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
//import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import App from './app';
import { AuthProvider } from './contexts/JWTContext';
import { SettingsProvider } from './contexts/SettingsContext';
//import store from './store';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <StyledEngineProvider>
        <SettingsProvider>
              <BrowserRouter>
                <AuthProvider>
                  <App />
                </AuthProvider>
              </BrowserRouter>
        </SettingsProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  </StrictMode>, document.getElementById('root')
);

