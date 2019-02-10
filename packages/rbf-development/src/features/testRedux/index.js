import React, { Component } from 'react'
import { connect } from 'react-redux'
import { say } from '../../actions/test'

class TestReduxFeature extends Component {
  saySomething = () => {
    this.props.saySomething('Hello, my creator! ' + Math.random())
  }
  render () {
    const { say } = this.props
    return (
      <div>
        <h1>Test Redux Feature</h1>
        <h2>{ say }</h2>
        <button onClick={this.saySomething}>Say something</button>
      </div>
    )
  }
}

export default connect(state => {
  return state.test
}, {
  saySomething: say
})(TestReduxFeature)
