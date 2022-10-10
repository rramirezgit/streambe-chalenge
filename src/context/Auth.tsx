import { createContext, useEffect, useState } from 'react'
import { AuthContextData, userInterface } from 'types/context'

const initialUser = {
  contactId: 0,
  username: '',
  name: '',
  lastname: '',
  roles: [''],
  token_type: '',
  access_token: '',
  expires_in: 0,
  refresh_token: ''
}

const initialContext = {
  user: initialUser,
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
}

export const AuthContextTheme = createContext<AuthContextData>(initialContext)

const AuthContext = ({ children }: any): JSX.Element => {
  const [user, setUser] = useState<userInterface>(initialUser)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const user: string | null = sessionStorage.getItem('user')
    if (user !== null) {
      setIsAuthenticated(true)
      setUser(JSON.parse(user))
    }
  }, [])

  const login = (user: userInterface): void => {
    const userString = JSON.stringify(user)
    sessionStorage.setItem('user', userString)
    setUser(user)
    setIsAuthenticated(true)
  }

  const logout = (): void => {
    sessionStorage.removeItem('user')
    setUser(initialUser)
    setIsAuthenticated(false)
  }

  return (
    <AuthContextTheme.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </AuthContextTheme.Provider>
  )
}

export default AuthContext
