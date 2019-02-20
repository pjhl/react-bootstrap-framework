import React from 'react'
import { Form } from 'react-bootstrap'

/**
 * Bottstrap form-control for redux-Form
 * Usage example:
 * import { Field } from 'redux-form'
 * // ...
 * <Field component={ReduxFormControl} name='email' type='email' />
 */
const ReduxFormControl = ({ input, meta, ...props }) => {
  return <Form.Control {...props} {...input} />
}

export default ReduxFormControl
