import React from 'react'
import styled from 'styled-components'

import Input from '../Input'

// TODO: add search functionality

const StyledFooter = styled.footer`
  display: flex;
  flex-shrink: 0;
  border-top: 2px solid #ff6600;
  background-color: #f6f6ef;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Input label="Search" />
    </StyledFooter>
  )
}

export default Footer
