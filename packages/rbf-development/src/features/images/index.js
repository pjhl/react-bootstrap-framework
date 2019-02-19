import React, { Component } from 'react'
import Breadcrumbs from './Breadcrumbs'
import {
  Card,
  Form,
  ButtonToolbar,
  Button,
  DropdownButton,
  Dropdown
} from 'react-bootstrap'

const images = [
  { id: 3, title: 'Alejandro Escamilla' },
  { id: 20, title: 'Aleks Dorohovich' },
  { id: 27, title: 'Yoni Kaplan-Nadel' },
  { id: 31, title: 'How-Soon Ngu' },
  { id: 50, title: 'Tyler Wanlass' },
  { id: 55, title: 'Tyler Wanlass' },
  { id: 59, title: 'AlejandArt WaveroEscamilla' },
  { id: 64, title: 'Alexander Shustov' },
  { id: 77, title: 'May Pamintuan' },
  { id: 91, title: 'Jennifer Trovato' },
  { id: 104, title: 'Dyaa Eldin' },
  { id: 124, title: 'Anton Sulsky' },
  { id: 129, title: 'Charlie Foster' },
  { id: 155, title: 'Christopher Sardegna' },
  { id: 169, title: 'Noel Lopez' },
  { id: 183, title: 'müllermarc' },
  { id: 209, title: 'Martin Wessely' },
  { id: 217, title: 'Tom Butler' },
  { id: 244, title: 'Yair Hazout' }
]

export default class Images extends Component {
  render () {
    return <div className='pt-3'>
      <Breadcrumbs />
      <Card body>
        <div className='d-flex mb-4'>
          <div>
            <Form inline>
              <Form.Control placeholder='Search' />
            </Form>
          </div>
          <div className='ml-auto'>
            <ButtonToolbar>
              <DropdownButton variant='outline-secondary' title='Filter'>
                <Dropdown.Item as='button'>Id</Dropdown.Item>
                <Dropdown.Item as='button'>Title</Dropdown.Item>
                <Dropdown.Item as='button'>Src</Dropdown.Item>
              </DropdownButton>
              <Button variant='primary'>✚ Create</Button>
            </ButtonToolbar>
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          { images.map((image, index) => (
            <Card style={{ width: 250 }} key={index}>
              <Card.Img variant='top' src={`https://picsum.photos/250/190?image=${image.id}`} />
              <Card.Body>
                <Card.Title>
                  {image.title}
                </Card.Title>
                <Button variant='success' size='sm'>Edit</Button>
                <Button variant='danger' size='sm'>Remove</Button>
              </Card.Body>
            </Card>
          )) }
        </div>
      </Card>
    </div>
  }
}
