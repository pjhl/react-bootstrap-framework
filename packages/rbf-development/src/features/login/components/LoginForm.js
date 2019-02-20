import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import ReduxFormControl from '../../../components/ReduxFormControl'

const styles = {
  button: {
    width: '100%'
  }
}

const LoginForm = (props) => {
  const { handleSubmit, pristine, submitting, onLoginSubmit } = props
  return <Form onSubmit={handleSubmit(onLoginSubmit)}>
    <Form.Group controlId='email'>
      <Form.Label>Email</Form.Label>
      <Field
        component={ReduxFormControl}
        name='email'
        type='email'
        placeholder='Email'
      />
    </Form.Group>

    <Form.Group controlId='password'>
      <Form.Label>Password</Form.Label>
      <Field
        component={ReduxFormControl}
        name='password'
        type='password'
        placeholder='Password'
      />
    </Form.Group>
    <Button variant='primary' type='submit' style={styles.button}
      disabled={pristine || submitting}>
      Login
    </Button>
  </Form>
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)
