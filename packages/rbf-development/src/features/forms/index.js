import React from 'react'
import Form from './Form'
import TextInput from './input/TextInput'

const record = {
  title: 'Le Fabuleux Destin d\'Amélie Poulain'
}

export default () => (
  <Form>
    <TextInput attribute='title' record={record} label='Title' />
  </Form>
)
