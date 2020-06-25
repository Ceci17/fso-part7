import React from 'react'
import { formatDistance } from 'date-fns'
import { useDispatch } from 'react-redux'

import {
  Article,
  Blog,
  Blogs,
  Content,
  OrderedList,
  Triangle,
  Title,
  Subtitle,
  InfoText,
  StyledLink,
  BlogLink
} from './styled'
import { like } from '../../reducers/blogsReducer'

const BlogList = ({ blogs }) => {
  const dispatch = useDispatch()

  const handleLike = (blog) => {
    console.log(blog)
    dispatch(like(blog))
  }

  return (
    <Blogs>
      <OrderedList>
        {blogs.map((blog) => (
          <Blog key={blog.id}>
            <Article>
              <Triangle onClick={() => handleLike(blog)} />
              <Content>
                <StyledLink to={`/blogs/${blog.id}`}>
                  <Title>{blog.title}</Title>
                </StyledLink>
                <BlogLink href={blog.url}>
                  ({blog.url.split('/')[2]})
                </BlogLink>
                <Subtitle>
                  <InfoText>{blog.likes} likes</InfoText>
                  <InfoText> | </InfoText>
                  <InfoText>by {blog.user.username}</InfoText>
                  <InfoText>
                    {' '}
                    {formatDistance(
                      new Date(blog.date),
                      new Date(Date.now()),
                      {
                        addSuffix: true
                      }
                    )}
                  </InfoText>
                  <InfoText> | </InfoText>
                  <InfoText>{blog.comments.length} comments</InfoText>
                </Subtitle>
              </Content>
            </Article>
          </Blog>
        ))}
      </OrderedList>
    </Blogs>
  )
}

export default BlogList
