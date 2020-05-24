import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  flex-shrink: 0;
  background-color: #ff6600;
`

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  )
}

export default Footer
