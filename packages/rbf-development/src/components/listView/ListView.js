import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  ButtonToolbar,
  Button,
  DropdownButton,
  Dropdown
} from 'react-bootstrap'
import FilterForm from './FilterForm'
import { TextInput } from '../input/'

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
  onChangeFilters (values) {
    console.log('Values:', values)
  }
  render () {
    const { resource } = this.props
    const filters = resource.list.params.filters
    return <Card body>
      <div className='d-flex mb-4'>
        <div>
          <FilterForm onChangeFilters={this.onChangeFilters} filters={filters}>
            <TextInput attribute='id' label='Id' />
            <TextInput attribute='title' label='Title' />
            <TextInput attribute='source' label='Source' />
          </FilterForm>
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
