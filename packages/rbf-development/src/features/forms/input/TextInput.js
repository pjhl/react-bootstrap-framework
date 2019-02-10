import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextInput extends Component {
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
    const value = e.target.value
    this.props.onChange(value, this.props.attribute)
  }
  render () {
    const { attribute, record, label } = this.props
    const value = record[attribute]
    return <input
      type='text'
      name={attribute}
      value={value}
      onChange={this.onChange}
      placeholder={label} />
  }
}
