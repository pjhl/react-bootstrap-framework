import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Form,
  ButtonToolbar,
  Button,
  DropdownButton,
  Dropdown
} from 'react-bootstrap'

export default class ListView extends Component {
  static propTypes = {
    resource: PropTypes.object.isRequired,
    children: PropTypes.func
  }
  static defaultProps = {
    children: () => {}
  }
  renderList () {
    const { resource, children } = this.props
    return resource.list.visibleIds.map(id => {
      const record = resource.data[id] || null
      return children(record)
    })
  }
  render () {
    return <Card body>
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
        {this.renderList()}
      </div>
    </Card>
  }
}
