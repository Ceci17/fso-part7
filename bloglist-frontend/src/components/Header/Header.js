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

const Header = () => {
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
      <LoggedUser />
    </StyledHeader>
  )
}

export default Header
