import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../reducers/userReducer'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Logout = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  align-self: flex-end;
`

const User = styled.span`
  font-size: 14px;
`

const StyledLoggedUser = styled.div`
  display: flex;
  text-align: right;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`

const Pipe = styled.span`
  margin: 0 3px;
  @media (max-width: 520px) {
    display: none;
  }
`

const LoggedUser = () => {
  const user = useSelector((state) => state.user)
  const numOfBlogs = useSelector((state) =>
    user
      ? state.users.find((u) => u.username === user.username)?.blogs
          ?.length
      : null
  )

  const dispatch = useDispatch()
  const history = useHistory()

  const logout = () => {
    dispatch(setUser(null))
    window.localStorage.removeItem('loggedUser')
    history.push('/login')
  }

  if (!user) {
    return null
  }

  return (
    <StyledLoggedUser>
      <User>
        {user.username} ({numOfBlogs})
      </User>
      <Pipe>|</Pipe>
      <Logout type="submit" onClick={logout}>
        logout
      </Logout>
    </StyledLoggedUser>
  )
}

export default LoggedUser
