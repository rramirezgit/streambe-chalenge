export interface userInterface {
  username: string
  name: string
  lastname: string
  roles: string[]
  token_type: string
  access_token: string
  expires_in: number
  refresh_token: string
  contactId: number
}

export interface AuthContextData {
  user: userInterface
  isAuthenticated: boolean
  login: (user: userInterface) => void
  logout: () => void
}
