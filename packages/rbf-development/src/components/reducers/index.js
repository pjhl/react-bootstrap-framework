import { combineReducers } from 'redux'
import forms from './forms'
import test from './test'
import { reducer as form } from 'redux-form'
import auth from './auth'
import resources from './resources'

const rootReducer = combineReducers({
  forms,
  test,
  form,
  auth,
  resources
})

export default rootReducer
