const initialState = {
  error: null,
  success: null
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return { ...state, success: action.data }
    case 'ERROR':
      return { ...state, error: action.data }
    case 'CLEAR':
      return { error: null, success: null }
    default:
      return state
  }
}

export const notifySuccess = (notification, time) => {
  return (dispatch) => {
    dispatch({
      type: 'SUCCESS',
      data: notification
    })
    setTimeout(() => dispatch({ type: 'CLEAR' }), time * 1000)
  }
}

export const notifyError = (notification, time) => {
  return (dispatch) => {
    dispatch({
      type: 'ERROR',
      data: notification
    })
    setTimeout(
      () => dispatch({ type: 'CLEAR', data: '' }),
      time * 1000
    )
  }
}

export default notificationReducer
