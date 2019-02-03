import React from 'react'
import Input from './Input'
import PropTypes from 'prop-types'

export default class TextInput extends Input {
  static propTypes = {
    name: PropTypes.string.isRequired,
    attribute: PropTypes.string,
    value: PropTypes.string,
    record: PropTypes.object,
    onChange: PropTypes.func,
    htmlOptions: PropTypes.object
  }
  static defaultProps = {
    name: '',
    attribute: '',
    value: '',
    record: {},
    onChange: (value, attribute, record) => {},
    htmlOptions: null
  }
  onChange = (e) => {
    const value = e.target.value
    const { attribute, record } = this.props
    this.props.onChange(value, attribute, record)
  }
  render () {
    const { value, htmlOptions } = this.props
    return (
      <input
        type='text'
        value={value}
        onChange={this.onChange}
        {...htmlOptions} />
    )
  }
}
