import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const ligthTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[100]
    },
    primary: {
      main: '#d9534f'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#000'
        }
      }
    }
  }
})
