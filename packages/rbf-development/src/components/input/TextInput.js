import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReduxFormControl from '../ReduxFormControl'
import { Field } from 'redux-form'

export default class TextInput extends Component {
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
    return <Field
      component={ReduxFormControl}
      type='text'
      name={attribute}
      value={value}
      placeholder={label} />
  }
}
