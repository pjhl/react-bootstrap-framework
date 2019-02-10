import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BooleanInput extends Component {
  static propTypes = {
    attribute: PropTypes.string,
    record: PropTypes.object,
    label: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultProps = {
    attribute: '',
    record: {},
    label: '',
    onChange: () => {}
  }
  onChange = (e) => {
    const value = e.target.checked
    this.props.onChange(value, this.props.attribute)
  }
  render () {
    const { attribute, record, label } = this.props
    const value = record[attribute]
    return <input
      type='checkbox'
      name={attribute}
      checked={value}
      placeholder={label}
      onChange={this.onChange} />
  }
}
