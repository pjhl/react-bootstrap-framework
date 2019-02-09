import React from 'react'
import Form from './Form'
import TextInput from './input/TextInput'
import BooleanInput from './input/BooleanInput'

const record = {
  title: 'Le Fabuleux Destin d\'Amélie Poulain',
  seen: true
}

export default () => (
  <Form>
    <TextInput attribute='title' record={record} label='Title' />
    <br />
    <BooleanInput attribute='seen' record={record} label='Seen' />
  </Form>
)
