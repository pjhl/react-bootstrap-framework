import {
  take,
  fork,
  call,
  put,
  cancel,
  cancelled
} from 'redux-saga/effects'
import authProvider, {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_INFO
} from '../providers/auth'

// TODO: write this login function
export function * authorize (params) {
  console.log('Authorize params:', params)
  try {
    yield call(authProvider, AUTH_LOGIN, params)
    yield put({ type: 'LOGIN_SUCCESS' })
  } catch (err) {
    yield put({ type: 'LOGIN_ERROR', payload: err })
  } finally {
    if (yield cancelled()) {
      yield put({ type: 'LOGIN_CANCELED' })
    }
  }
}

export function * loginFlow () {
  while (true) {
    const { payload: params = {} } = yield take('LOGIN_REQUESTED')
    const task = yield fork(authorize, params)
    const action = yield take([ 'LOGOUT', 'LOGIN_ERROR' ])
    if (action.type === 'LOGOUT') {
      yield cancel(task)
    }
    yield call(authProvider, AUTH_LOGOUT)
  }
}

export function * authCheck () {
  yield take('AUTH_CHECK_REQUESTED')
  try {
    const user = yield call(authProvider, AUTH_INFO)
    yield put({ type: 'AUTH_CHECK_SUCCESS', payload: user })
  } catch (err) {
    yield put({ type: 'AUTH_CHECK_ERROR', payload: err })
  }
}

function * loginSaga () {
  yield fork(loginFlow)
  yield fork(authCheck)
}

export default loginSaga
