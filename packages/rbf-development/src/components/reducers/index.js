import { combineReducers } from 'redux'
import forms from './forms'
import test from './test'
import { reducer as form } from 'redux-form'
import auth from './auth'

const rootReducer = combineReducers({
  forms,
  test,
  form,
  auth
})

export default rootReducer
