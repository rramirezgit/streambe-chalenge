// import { useContext } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Form, Formik, FormikHelpers, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import { red } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
// import { AuthContextTheme } from '../../context/Auth'
import { AuthLayout } from 'layouts/login'
import styles from './styles.module.css'

interface LoginProps {
  username: string
  password: string
}

const Login = (): JSX.Element => {
  const navigate = useNavigate()
  // const { login } = useContext(AuthContextTheme)

  const validateUser = (values: LoginProps): boolean => {
    // const user = Users.find(
    //   user =>
    //     user.username === values.username && user.password === values.password
    // )
    // if (user) {
    //   login({
    //     username: values.username,
    //     password: values.password,
    //     role: user.role,
    //     dependencias: user.dependencias,
    //     name: user.name
    //   })
    //   return true
    // }
    return false
  }

  const handleSubmit = (
    values: LoginProps,
    { setErrors }: FormikHelpers<LoginProps>
  ): void => {
    if (validateUser(values)) {
      navigate('/')
    } else {
      setErrors({
        username: 'username o password incorrectos'
      })
    }
  }

  return (
    <AuthLayout>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, options) => handleSubmit(values, options)}
        validationSchema={Yup.object({
          username: Yup.string().required('El username es requerido'),
          password: Yup.string().required('La password es requerida')
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
