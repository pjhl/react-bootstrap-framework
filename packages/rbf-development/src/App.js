import React, { Component } from 'react'
import AppRouter from './components/AppRouter'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from './components/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

export default App
