import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { AppLayout } from 'layouts/AppLayout'

const Thanks = (): JSX.Element => {
  return (
    <AppLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 200px)',
          gap: 5,
          padding: 5
        }}
      >
        <img
          src="https://streambe.com/wp-content/uploads/2022/07/streambe_isologotipo_vector.svg"
          alt="thanks"
          width="30%"
        />
        <Typography
          variant="h1"
          component="h1"
          textAlign={'center'}
          fontSize={{
            xs: '3rem',
            sm: '4rem'
          }}
        >
          Thank you for the opportunity
        </Typography>
      </Box>
    </AppLayout>
  )
}

export default Thanks
