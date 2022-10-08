import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import { chilld } from 'types/const'

export const AuthLayout = ({ children }: chilld): JSX.Element => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          width={{ xs: 354, sm: 400 }}
          sx={{
            display: 'flex',
            '& > :not(style)': {
              width: 454,
              height: 504
            }
          }}
        >
          <Paper elevation={3}>{children}</Paper>
        </Box>
      </Box>
    </>
  )
}
