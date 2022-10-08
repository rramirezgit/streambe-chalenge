import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ligthTheme } from 'themes/light-theme'
import router from 'routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ligthTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
