import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BlogTitle, Like } from './components'
import { like } from '../../reducers/blogsReducer'
import { deleteBlog } from '../../reducers/blogsReducer'
import {
  notifySuccess,
  notifyError
} from '../../reducers/notificationReducer'
import blogService from '../../services/blogs'
import { useHistory } from 'react-router-dom'
import CommentSection from '../CommentSection'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLike = (blog) => {
    dispatch(like(blog))
  }

  const user = useSelector((state) => state.user)

  const handleDelete = async (blog, id) => {
    if (
      window.confirm(`Remove blog ${blog.title} by ${blog.author}`)
    ) {
      try {
        await blogService.remove(id)
        history.push('/')
        dispatch(deleteBlog(id))
        dispatch(
          notifySuccess(
            `Successfully deleted ${blog.title} by ${blog.author}`,
            3
          )
        )
      } catch (exception) {
        dispatch(
          notifyError(
            `You don't have permission to delete this blog post`,
            3
          )
        )
      }
    }
  }
  if (!blog) return null

  return (
    <div>
      <BlogTitle
        title={blog.title}
        author={blog.author}
        url={blog.url}
      />

      <div style={{ marginTop: 10 }}>
        <Like
          likes={blog.likes}
          handleLike={() => handleLike(blog)}
        />
        <p
          className="blog-author"
          style={{
            marginTop: 10,
            marginBottom: 20,
            fontStyle: 'italic'
          }}
        >
          {blog.user.name}
        </p>
        {user.username === blog.user.username && (
          <button
            style={{
              backgroundColor: '#bb2124',
              color: '#fff',
              border: 0,
              borderRadius: 5,
              padding: 5,
              marginBottom: 20
            }}
            onClick={() => handleDelete(blog, blog.id)}
          >
            delete
          </button>
        )}
      </div>
      <CommentSection blogId={blog.id} blog={blog} />
    </div>
  )
}

export default Blog
