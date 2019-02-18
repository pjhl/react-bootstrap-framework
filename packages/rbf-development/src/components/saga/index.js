import {
  takeEvery
} from 'redux-saga/effects'

function * testSaga (action) {
  console.log('Test saga')
  yield 1
}

function * rootSaga () {
  yield takeEvery('TEST', testSaga)
}

export default rootSaga
