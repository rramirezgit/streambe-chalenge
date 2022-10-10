/* eslint-disable multiline-ternary */
import TimeOutHandler from 'components/TimeOutHandler'
import { AuthContextTheme } from 'context/Auth'
import { useContext } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Dashboard from 'views/dashboard'
import Login from 'views/Login'
import Thanks from 'views/thanks'

const ProtectedRoute = ({ children }: any): JSX.Element => {
  const { isAuthenticated, user, logout } = useContext(AuthContextTheme)

  return isAuthenticated ? (
    <>
      <TimeOutHandler
        timeOutInterval={user.expires_in}
        onLogout={() => {
          logout()
        }}
      >
        {children}
      </TimeOutHandler>
    </>
  ) : (
    <Navigate to="/login" />
  )
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/thankyou',
    element: (
      <ProtectedRoute>
        <Thanks />
      </ProtectedRoute>
    )
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
])

export default router
