import blogService from '../services/blogs'
import commentService from '../services/comments'

const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'LIKE':
      const likedBlog = state.find(
        (blog) => blog.id === action.data.id
      )

      const updatedBlog = {
        ...likedBlog,
        user: { ...likedBlog.user, id: action.data.user },
        likes: likedBlog.likes + 1
      }

      return state.map((blog) =>
        blog.id !== updatedBlog.id ? blog : updatedBlog
      )
    case 'NEW_BLOG':
      return [...state, action.data]
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== action.data)
    case 'NEW_COMMENT':
      const commentedBlog = state.find(
        (blog) => blog.id === action.data.id
      )

      const updatedWithComment = {
        ...commentedBlog,
        comments: [...commentedBlog.comments, action.data.newComment]
      }

      return state.map((blog) =>
        blog.id !== updatedWithComment.id ? blog : updatedWithComment
      )
    default:
      return state
  }
}

export const like = (blog) => {
  return async (dispatch) => {
    // const likedBlog = {
    //   ...blog,
    //   likes: blog.likes + 1
    // }
    const likes = blog.likes + 1
    console.log('like -> likes', likes)
    const response = await blogService.patch({ likes }, blog.id)

    dispatch({
      type: 'LIKE',
      data: response
    })
  }
}

export const createBlog = (blog, creator) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(blog)
    const data = {
      ...newBlog,
      user: {
        id: newBlog.user,
        username: creator.username,
        name: creator.name
      }
    }
    dispatch({ type: 'NEW_BLOG', data })
  }
}

export const deleteBlog = (id) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_BLOG', data: id })
  }
}

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createComment = (id, comment) => {
  console.log('NEW COMMENT', comment)
  return async (dispatch) => {
    const newComment = await commentService.create(id, comment)
    dispatch({
      type: 'NEW_COMMENT',
      data: {
        newComment,
        id
      }
    })
  }
}

export default blogsReducer
