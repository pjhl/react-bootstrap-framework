import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
  static propTypes = {
    record: PropTypes.object
  }
  static defaultProps = {
    record: {}
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log('onSubmit executed')
  }
  render () {
    const { children, record } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        { children.map((el, index) => {
          if (el.type.prototype instanceof Component) {
            return React.cloneElement(el, {
              key: index,
              record
            })
          }
          return el
        }) }
      </form>
    )
  }
}
