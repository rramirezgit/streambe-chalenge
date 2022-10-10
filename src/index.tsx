import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { ligthTheme } from 'themes/light-theme'
import AuthContext from 'context/Auth'
import App from 'App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ligthTheme}>
      <CssBaseline />
      <AuthContext>
        <App />
      </AuthContext>
    </ThemeProvider>
  </React.StrictMode>
)
