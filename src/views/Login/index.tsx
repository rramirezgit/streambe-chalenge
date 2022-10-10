import { useContext, useEffect } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Form, Formik, FormikHelpers, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import { red } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import { AuthContextTheme } from '../../context/Auth'
import { AuthLayout } from 'layouts/login'
import { get } from 'services'
import styles from './styles.module.css'

interface LoginProps {
  username: string
  password: string
}

const Users = [
  {
    username: 'tom.manchini@yopmail.com',
    password: '123456'
  }
]

const Login = (): JSX.Element => {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useContext(AuthContextTheme)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const validateUser = async ({
    username,
    password
  }: LoginProps): Promise<boolean> => {
    const user = Users.find(
      user => user.username === username && user.password === password
    )

    if (user) {
      return await get('https://www.mockachino.com/06c67c77-18c4-45/login')
        .then(response => {
          if (response?.status === 200) {
            login({
              access_token: response.data.access_token,
              contactId: response.data.contactId,
              expires_in: response.data.expires_in,
              lastname: response.data.lastname,
              name: response.data.name,
              refresh_token: response.data.refresh_token,
              roles: response.data.roles,
              token_type: response.data.token_type,
              username: response.data.username
            })
            return true
          }
          return false
        })
        .catch(error => {
          console.log(error)
          return false
        })
    }
    return false
  }

  const handleSubmit = async (
    values: LoginProps,
    { setErrors }: FormikHelpers<LoginProps>
  ): Promise<any> => {
    await validateUser(values)
      .then(isValid => {
        if (!isValid) {
          setErrors({
            username: 'Invalid username or password'
          })
        }
      })
      .then(error => {
        console.log(error)
      })
  }

  return (
    <AuthLayout>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, options) =>
          await handleSubmit(values, options)
        }
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          password: Yup.string().required('Required')
        })}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <Box
              width={{ xs: 354, sm: 400 }}
              height={{ xs: 504 }}
              className={styles['login-form']}
            >
              <Typography variant="h4" className={styles['login-title']}>
                Login
              </Typography>

              <Box height={{ xs: 74 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Username"
                  {...formik.getFieldProps('username')}
                />
                <ErrorMessage name="username" />
              </Box>
              <Box height={{ xs: 74 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Password"
                  type="password"
                  {...formik.getFieldProps('password')}
                />
                <ErrorMessage name="password" />
              </Box>
              <Button type="submit" variant="contained">
                Ingresar
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  )
}

export default Login
