import React from 'react'
import Form from './Form'
import TextInput from './input/TextInput'
import BooleanInput from './input/BooleanInput'
import SelectInput from './input/SelectInput'

const record = {
  title: 'Le Fabuleux Destin d\'Amélie Poulain',
  seen: true,
  mark: 5
}

const markChoices = [
  { id: false, name: 'No mark' },
  { id: 1, name: 'Shit (1)' },
  { id: 2, name: 'Bad idea (2)' },
  { id: 3, name: 'Not bad (3)' },
  { id: 4, name: 'Good (4)' },
  { id: 5, name: 'Perfect (5)' }
]

export default () => (
  <Form record={record}>
    <TextInput attribute='title' label='Title' />
    <br />
    <BooleanInput attribute='seen' label='Seen' />
    <br />
    <SelectInput attribute='mark' label='Mark' choices={markChoices} />
    <hr />
    <button>Submit</button>
  </Form>
)
