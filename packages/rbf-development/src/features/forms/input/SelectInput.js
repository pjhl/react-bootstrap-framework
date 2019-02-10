import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SelectInput extends Component {
  static propTypes = {
    attribute: PropTypes.string,
    record: PropTypes.object,
    label: PropTypes.string,
    choices: PropTypes.arrayOf(
      PropTypes.object
    ),
    onChange: PropTypes.func
  }
  static defaultProps = {
    attribute: '',
    record: {},
    label: '',
    choices: [],
    onChange: () => {}
  }
  onChange = (e) => {
    const value = e.target.value
    this.props.onChange(value, this.props.attribute)
  }
  render () {
    const { attribute, record, choices } = this.props
    const value = record[attribute]
    return (
      <select value={value} onChange={this.onChange}>
        { choices.map((el, index) => (
          <option key={index} value={el.id}>{el.name}</option>
        )) }
      </select>
    )
  }
}
