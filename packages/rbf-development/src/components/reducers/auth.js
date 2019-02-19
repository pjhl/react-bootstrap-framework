const initialState = {
  isLoggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_CHECK_SUCCESS':
    case 'LOGIN_SUCCESS':
      return {
        isLoggedIn: true
      }
    case 'LOGIN_ERROR':
    case 'LOGIN_CANCELED':
    case 'LOGOUT':
    case 'AUTH_CHECK_FAILED':
      return {
        isLoggedIn: false
      }
    case 'AUTH_CHECK_ERROR':
      console.error('Auth check error:', action.payload)
      return state
    default:
      return state
  }
}
