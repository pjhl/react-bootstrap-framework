import { fork } from 'redux-saga/effects'
import login from './login'

function * rootSaga () {
  yield fork(login)
}

export default rootSaga
