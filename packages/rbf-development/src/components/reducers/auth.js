const initialState = {
  isLoggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isLoggedIn: true
      }
    case 'LOGIN_ERROR':
    case 'LOGIN_CANCELED':
    case 'LOGOUT':
      return {
        isLoggedIn: false
      }
    default:
      return state
  }
}
