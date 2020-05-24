import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 0;
`
const Url = styled.a`
  color: #828282;
  display: block;
  text-decoration: none;
  font-size: 12px;
  margin-bottom: 30px;
`

export const BlogTitle = ({ title, author, url }) => {
  return (
    <div>
      <Title>
        {title} by {author}
      </Title>
      <Url href={url} target="_blank">
        {url}
      </Url>
    </div>
  )
}
