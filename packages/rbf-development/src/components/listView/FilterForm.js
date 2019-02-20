import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { reduxForm } from 'redux-form'

export class FilterForm extends Component {
  static propTypes = {
    filters: PropTypes.object,
    onChangeFilters: PropTypes.func,
    children: PropTypes.node
  }
  static defaultprops = {
    filters: {},
    onChangeFilters: () => {}
  }
  onSubmitForm = (values) => {
    this.props.onChangeFilters(values)
  }
  render () {
    const { handleSubmit, children, filters } = this.props
    return <Form inline onSubmit={handleSubmit(this.onSubmitForm)}>
      {React.Children.map(children, (el, index) => {
        return React.cloneElement(el, {
          record: filters
        })
      })}
      <button type='submit' style={{ display: 'none' }} />
    </Form>
  }
}

export default reduxForm({
  form: 'filterForm'
})(FilterForm)
