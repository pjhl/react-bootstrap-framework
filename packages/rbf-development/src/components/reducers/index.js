import { combineReducers } from 'redux'
import forms from './forms'
import test from './test'

const rootReducer = combineReducers({
  forms,
  test
})

export default rootReducer
