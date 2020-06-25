import React from 'react'
import {
  StyledHeader,
  Logo,
  Nav,
  NavItem,
  NLink,
  Title,
  FlexWrapper
} from './styled'
import LoggedUser from '../LoggedUser'

const Header = ({ loggedUser }) => {
  console.log('Header -> loggedUser', loggedUser)
  return (
    <StyledHeader>
      <Logo to="/">B</Logo>

      <FlexWrapper>
        <Title>
          <NLink exact to="/">
            Blog App
          </NLink>
        </Title>
        <Nav className="navigation">
          <NavItem>
            <NLink exact to="/" activeClassName="selected">
              home
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to="/new" activeClassName="selected">
              new
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to="/users" activeClassName="selected">
              users
            </NLink>
          </NavItem>
          <NavItem>
            <NLink to="/submit" activeClassName="selected">
              submit
            </NLink>
          </NavItem>
        </Nav>
      </FlexWrapper>
      {loggedUser ? (
        <LoggedUser />
      ) : (
        <NavItem>
          <NLink to="/login" activeClassName="selected">
            login
          </NLink>
        </NavItem>
      )}
    </StyledHeader>
  )
}

export default Header
