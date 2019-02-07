import React from 'react'
import { Form, Button } from 'react-bootstrap'

const styles = {
  button: {
    width: '100%'
  }
}

const LoginForm = () => (
  <Form>
    <Form.Group controlId='email'>
      <Form.Label>Email</Form.Label>
      <Form.Control type='email' placeholder='Email' />
    </Form.Group>

    <Form.Group controlId='password'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' placeholder='Password' />
    </Form.Group>
    <Button variant='primary' type='button' style={styles.button}>
      Login
    </Button>
  </Form>
)

export default LoginForm
