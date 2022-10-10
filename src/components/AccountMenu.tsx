/* eslint-disable @typescript-eslint/no-misused-promises */
import { MouseEvent, useContext, useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import Logout from '@mui/icons-material/Logout'
import { Chip } from '@mui/material'
import Swal from 'sweetalert2'
import { AuthContextTheme } from 'context/Auth'
import { useNavigate } from 'react-router-dom'

const AccountMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContextTheme)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleLogout = async (): Promise<void> => {
    await Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8d6160',
      cancelButtonColor: '#d9534f',
      confirmButtonText: 'Yes'
    }).then(result => {
      if (result.isConfirmed) {
        logout()
      }
    })
  }
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Chip label={user.roles} variant="outlined" />
        <IconButton aria-haspopup="true" onClick={handleClick} color="inherit">
          <Avatar>{user.name.slice(0, 2).toUpperCase()}</Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 180,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box paddingLeft={2} paddingBottom={1}>
          <Typography fontSize={20}>{user.name}</Typography>
        </Box>
        <Divider />
        <MenuItem onClick={() => navigate('/thankyou')}>
          <ListItemIcon>
            <StarIcon fontSize="small" />
          </ListItemIcon>
          Thanks
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </>
  )
}

export default AccountMenu
