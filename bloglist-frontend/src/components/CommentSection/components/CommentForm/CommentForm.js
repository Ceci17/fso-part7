import React from 'react'
import { useDispatch } from 'react-redux'

import TextArea from '../../../TextArea'
import useForm from '../../../../hooks/useForm'

import { createComment } from '../../../../reducers/blogsReducer'

const CommentForm = ({ blogId }) => {
  const { values, handleChange, setValues } = useForm({
    comment: ''
  })

  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const comment = {
        content: values.comment
      }
      dispatch(createComment(blogId, comment))

      // dispatch(notifySuccess(`Comment added`))
      setValues({ ...values, comment: '' })
    } catch (exception) {
      console.log(exception)
      // dispatch(notifyError(`Something went wrong. Try again`))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        className="textarea"
        id="comment"
        type="text"
        value={values.comment}
        name="comment"
        onChange={handleChange}
        rows={6}
        cols={60}
      />
      <div>
        <button type="submit">add comment</button>
      </div>
    </form>
  )
}

export default CommentForm
