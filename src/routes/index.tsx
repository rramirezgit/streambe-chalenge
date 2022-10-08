import { AuthContextTheme } from 'context/Auth'
import { useContext } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from 'views/Login'

const ProtectedRoute = ({ children }: any): JSX.Element => {
  const { isAuthenticated } = useContext(AuthContextTheme)
  return isAuthenticated ? children : <Navigate to="/login" />
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
        <div>About</div>
      </ProtectedRoute>
    )
  }
])

export default router
