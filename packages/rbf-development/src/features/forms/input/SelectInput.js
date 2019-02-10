import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SelectInput extends Component {
  static propTypes = {
    attribute: PropTypes.string,
    record: PropTypes.object,
    label: PropTypes.string,
    choices: PropTypes.arrayOf(
      PropTypes.object
    )
  }
  static defaultProps = {
    attribute: '',
    record: {},
    label: '',
    choices: []
  }
  render () {
    const { attribute, record, choices } = this.props
    const value = record[attribute]
    return (
      <select defaultValue={value}>
        { choices.map((el, index) => (
          <option key={index} value={el.id}>{el.name}</option>
        )) }
      </select>
    )
  }
}
