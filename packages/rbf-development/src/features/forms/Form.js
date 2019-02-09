import React, { Component } from 'react'

export default class Form extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    console.log('onSubmit executed')
  }
  render () {
    const { children } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        { children }
      </form>
    )
  }
}
