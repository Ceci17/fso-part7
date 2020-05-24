import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: #828282;
  }
`

const Data = styled.td`
  font-size: 14px;
  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};
`

const Users = () => {
  const users = useSelector((state) => state.users)

  return (
    <>
      {users && (
        <div className="users">
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>blogs created</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <Data>
                    <StyledLink to={`/users/${user.id}`}>
                      {user.name}
                    </StyledLink>
                  </Data>
                  <Data textAlign="center">{user.blogs.length} </Data>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default Users
