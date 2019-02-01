import React from 'react'
import Formatter from './Formatter'
import PropTypes from 'prop-types'

export default class Boolean extends Formatter {
  static propTypes = {
    value: PropTypes.string,
    htmlOptions: PropTypes.object
  }
  static defaultProps = {
    value: '#',
    htmlOptions: null
  }
  render () {
    const { value, children, htmlOptions } = this.props
    return (
      <a href={value} {...htmlOptions}>{children}</a>
    )
  }
}
