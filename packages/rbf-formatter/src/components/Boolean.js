import React from 'react'
import Formatter from './Formatter'
import PropTypes from 'prop-types'

export default class Boolean extends Formatter {
  static propTypes = {
    strict: PropTypes.bool
  }
  static defaultProps = {
    strict: true
  }
  render () {
    // TODO: This method is very mocked
    const { attribute = '', value = '' } = this
    return (
      <div>
        {attribute}<br />
        {value}
      </div>
    )
  }
}
