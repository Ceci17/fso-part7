import React, { useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import BlogList from './components/BlogList'
import Users from './components/Users'
import User from './components/User'
import Header from './components/Header'
import { initializeBlogs } from './reducers/blogsReducer'
import { setUser } from './reducers/userReducer'
import { getUsers } from './reducers/usersReducer'
import Blog from './components/Blog/Blog'
import { Main } from './components/styled'
import Footer from './components/Footer'

const App = () => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.users)
  const blogs = useSelector((state) => state.blogs)

  const loggedUser = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      dispatch(setUser(user))
      blogService.setToken(user.token)
    }
  }, [dispatch])

  const userMatch = useRouteMatch('/users/:id')
  const blogMatch = useRouteMatch('/blogs/:id')

  const user = userMatch
    ? users.find((user) => user.id === userMatch.params.id)
    : null

  const blog = blogMatch
    ? blogs.find((blog) => blog.id === blogMatch.params.id)
    : null

  const sortedBlogs = useSelector((state) =>
    state.blogs
      .slice()
      .sort((a, b) => b.likes - a.likes || b.title - a.title)
  )

  const newestBlogs = useSelector((state) =>
    state.blogs
      .slice()
      .sort(
        (a, b) =>
          new Date(b.date) - new Date(a.date) || b.title - a.title
      )
  )
  if (!loggedUser) {
    return (
      <>
        <Main>
          <Notification />
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
          </Switch>
        </Main>
      </>
    )
  }

  return (
    <>
      <Header />

      <Main>
        <Notification />

        <Switch>
          {!loggedUser && (
            <Route path="/login">
              <LoginForm />
            </Route>
          )}

          <Route exact path="/">
            <BlogList blogs={sortedBlogs} />
          </Route>
          <Route exact path="/blogs/:id">
            <Blog blog={blog} />
          </Route>
          <Route path="/new">
            <BlogList blogs={newestBlogs} />
          </Route>
          <Route path="/submit">
            <BlogForm />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/users/:id">
            <User user={user} />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </>
  )
}

export default App
