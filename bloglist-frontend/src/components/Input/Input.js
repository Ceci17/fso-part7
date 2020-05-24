import React from 'react'
import { StyledInput, Label, Field } from './styled'

const Input = (props) => {
  const { label, name } = props
  return (
    <StyledInput>
      {label && <Label htmlFor={name}>{label}: </Label>}
      <Field className="input" {...props} />
    </StyledInput>
  )
}

export default Input
