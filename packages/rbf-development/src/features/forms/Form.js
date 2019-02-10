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
    console.log('onSubmit execute')
  }
  render () {
    const { children, record } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        { children.map((el, index) => {
          if (el.type.prototype instanceof Component) {
            return React.cloneElement(el, {
              key: index,
              record,
              onChange: (value, attribute) => {
                console.log(`Attribute "${attribute}" changed to: ${value}`)
              }
            })
          }
          return el
        }) }
      </form>
    )
  }
}
