import React from 'react'
import CommentForm from './components/CommentForm'
import Comments from './components/Comments'

const CommentSection = ({ blogId, blog }) => {
  return (
    <div>
      <h4>Comments</h4>
      <CommentForm blogId={blogId} />
      <Comments comments={blog.comments} />
    </div>
  )
}

export default CommentSection
