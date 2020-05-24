import React from 'react'

const TextArea = (props) => {
  const { label, name } = props
  return (
    <>
      {label && <label htmlFor={name}>{label}: </label>}
      <textarea
        className="textarea"
        {...props}
        style={{
          padding: 5,
          marginBottom: 10,
          fontSize: 12
        }}
      />
    </>
  )
}

export default TextArea
