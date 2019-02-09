import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BooleanInput extends Component {
  static propTypes = {
    attribute: PropTypes.string,
    record: PropTypes.object,
    label: PropTypes.string
  }
  static defaultProps = {
    attribute: '',
    record: {},
    label: ''
  }
  render () {
    const { attribute, record, label } = this.props
    const value = record[attribute]
    return <input
      type='checkbox'
      name={attribute}
      defaultChecked={value}
      placeholder={label} />
  }
}
