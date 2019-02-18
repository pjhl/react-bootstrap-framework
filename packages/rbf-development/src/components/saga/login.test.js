/* global test, expect */
import { take } from 'redux-saga/effects'
import { loginFlow } from './login'

test('success login', () => {
  const iterator = loginFlow()

  expect(iterator.next().value).toEqual(
    take('LOGIN_REQUESTED')
  )

  const loginRequested = {
    payload: {
      email: 'admin@gmail.com',
      password: 'admin'
    }
  }

  console.log('~~', iterator.next(loginRequested).value)
})
