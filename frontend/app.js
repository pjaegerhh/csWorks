import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import SettingsDrawer from './components/SettingsDrawer'
import SplashScreen from './components/SplashScreen'

import useAuth from './hooks/useAuth';
import useSettings from './hooks/useSettings';

import routes from './routes'

import {createCustomTheme} from './theme'
import {hot} from 'react-hot-loader'

const App = () => {
  const content = useRoutes(routes);
  const { settings } = useSettings();
  const auth = useAuth();

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster position="top-center" />
        <SettingsDrawer />
        {true ? content : <SplashScreen />}
      </ThemeProvider>
)}

export default hot(module)(App)