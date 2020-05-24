import React from 'react'
import { useSelector } from 'react-redux'
import { Toast } from './styled'

const Notification = () => {
  const success = useSelector((state) => state.notification.success)
  const error = useSelector((state) => state.notification.error)

  const setClassName = () => {
    if (error) {
      return 'error'
    }
    if (success) {
      return 'success'
    }
    return ''
  }

  return (
    <Toast className={setClassName()}>
      {error ? error : success}
    </Toast>
  )
  // }
}

export default Notification
