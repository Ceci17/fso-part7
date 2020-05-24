import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

export const StyledHeader = styled.header`
  background-color: #ff6600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
`
export const Title = styled.h1`
  left: 30px;
  margin: 0;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Noto Sans', sans-serif;
`
export const FlexWrapper = styled.div`
  display: flex;
  padding-left: 30px;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`

export const Logo = styled(Link)`
  position: absolute;
  left: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
`

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-right: 20px;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  align-items: center;
`

export const NLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-family: 'Noto Sans', sans-serif;
  &.selected {
    color: #ffffff;
  }
`
export const NavItem = styled.li`
  list-style: none;
  position: relative;
  &:not(:last-of-type) {
    padding-right: 15px;
  }
  &:not(:last-of-type)::after {
    content: '|';
    position: absolute;
    top: 0;
    right: 4px;
  }
`
