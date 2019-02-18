import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import saga from './saga/'

const defaultState = {}
const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  defaultState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
      trace: true
    })
  )
)
/* eslint-enable */

sagaMiddleware.run(saga)

export const testAction = () => store.dispatch({ type: 'TEST' })

// Initialize app
store.dispatch({ type: 'AUTH_CHECK_REQUESTED' })

export default store
