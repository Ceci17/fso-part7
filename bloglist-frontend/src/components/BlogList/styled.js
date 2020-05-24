import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Article = styled.article`
  position: relative;
  margin-bottom: 5px;
`

export const Blog = styled.li``

export const Blogs = styled.div``

export const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  &:visited {
    color: #828282;
  }
`

export const Content = styled.div`
  margin-left: 12px;
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  margin: 0 5px 0 0;
`

export const Subtitle = styled.div``

export const InfoText = styled.span`
  font-size: 10px;
  color: #828282;
`

export const OrderedList = styled.ol`
  padding-left: 20px;
  color: #828282;
`

export const BlogLink = styled.a`
  color: #828282;
  font-size: 11px;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const Triangle = styled.a`
  position: absolute;
  top: 7px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 8px solid #828282;
  cursor: pointer;
`
