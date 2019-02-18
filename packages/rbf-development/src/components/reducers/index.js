import { combineReducers } from 'redux'
import forms from './forms'
import test from './test'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  forms,
  test,
  form
})

export default rootReducer
