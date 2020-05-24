import React from 'react'
import Input from '../Input'
import { Form } from './styled'
import useForm from '../../hooks/useForm'
import { createBlog } from '../../reducers/blogsReducer'
import {
  notifySuccess,
  notifyError
} from '../../reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const BlogForm = () => {
  const { values, handleChange, setValues } = useForm({
    title: '',
    author: '',
    url: ''
  })

  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const history = useHistory()

  const handleBlogSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch(
        createBlog(
          {
            title: values.title,
            author: values.author,
            url: values.url
          },
          user
        )
      )

      setValues({ title: '', author: '', url: '' })
      dispatch(notifySuccess(`A new blog ${values.title} added`, 3))
    } catch (exception) {
      console.error(exception)
      dispatch(
        notifyError('Required fields title and url missing', 3)
      )
    }
    history.push('/')
  }
  return (
    <Form id="blog-form" onSubmit={handleBlogSubmit}>
      <Input
        id="title"
        label="title"
        type="text"
        value={values.title}
        name="title"
        onChange={handleChange}
      />
      <Input
        id="author"
        label="author"
        type="text"
        value={values.author}
        name="author"
        onChange={handleChange}
      />
      <Input
        id="url"
        label="url"
        type="text"
        value={values.url}
        name="url"
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </Form>
  )
}

export default BlogForm
