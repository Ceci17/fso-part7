import React from 'react'
import Input from '../Input'
import loginService from '../../services/login'
import useForm from '../../hooks/useForm'
import {
  notifySuccess,
  notifyError
} from '../../reducers/notificationReducer'
import { setUser } from '../../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
  const { values, handleChange } = useForm({
    username: '',
    password: ''
  })

  const history = useHistory()

  // TODO: setValues?
  // useEffect(() => {
  //   return () => {
  //     setValues({ username: '', password: '' })
  //   }
  // }, [])

  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: values.username,
        password: values.password
      })
      history.push('/')
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      dispatch(setUser(user))
      dispatch(notifySuccess(`Welcome, ${user.name}`, 3))
    } catch (exception) {
      console.error(exception)
      dispatch(notifyError('Wrong username or password', 3))
    }
  }
  return (
    <form id="login-form" onSubmit={handleLogin}>
      <Input
        id="username"
        type="text"
        value={values.username}
        name="username"
        onChange={handleChange}
        placeholder="username"
      />
      <Input
        id="password"
        type="password"
        value={values.password}
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm
