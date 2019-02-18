import {
  take,
  fork,
  call,
  put,
  cancel,
  cancelled
} from 'redux-saga/effects'
import authProvider, { AUTH_LOGIN, AUTH_LOGOUT } from '../providers/auth'

// TODO: write this login function
function * authorize (params) {
  console.log('Authorize params:', params)
  try {
    yield call(authProvider, AUTH_LOGIN, params)
    yield put({ type: 'LOGIN_SUCCESS' })
  } catch (err) {
    yield put({ type: 'LOGIN_ERROR', err })
  } finally {
    if (yield cancelled()) {
      yield put({ type: 'LOGIN_CANCELED' })
    }
  }
}

function * loginFlow () {
  while (true) {
    const { payload: params = {} } = yield take('LOGIN_REQUESTED')
    const task = yield fork(authorize, params)
    const action = yield take([ 'LOGOUT', 'LOGIN_ERROR' ])
    console.log('~~~ action:', action)
    if (action.type === 'LOGOUT') {
      yield cancel(task)
    }
    yield call(authProvider, AUTH_LOGOUT)
  }
}

export default loginFlow
