// TODO: Move this to constant file
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_INFO = 'AUTH_INFO'

const authProvider = async (type, params = {}) => {
  switch (type) {
    case AUTH_LOGIN:
      const { email, password } = params
      if (email === 'admin@gmail.com' && password === 'admin') {
        if (window.localStorage) {
          window.localStorage.authMock = JSON.stringify({
            username: 'Admin',
            email,
            password
          })
        }
        return
      }
      throw new Error('Email or password is not correct')
    case AUTH_LOGOUT:
      if (window.localStorage && window.localStorage.authMock) {
        delete window.localStorage.authMock
      }
      break
    case AUTH_ERROR:
      console.log('Auth error detected:', params)
      break
    case AUTH_INFO:
      if (window.localStorage && window.localStorage.authMock) {
        return JSON.parse(window.localStorage.authMock)
      }
      return
    default:
      throw new Error('Unknown param "type" in the auth provider')
  }
}

export default authProvider
