import React, { Component } from 'react'
import Breadcrumbs from './Breadcrumbs'
import {
  Card,
  Button
} from 'react-bootstrap'
import ListView from '../../components/listView/ListView'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Images extends Component {
  static propTypes = {
    resource: PropTypes.object
  }
  render () {
    const { resource } = this.props
    return <div className='pt-3'>
      <Breadcrumbs />
      <ListView resource={resource}>
        {(record) => {
          return <Card style={{ width: 250 }} key={`image#${record.id}`}>
            <Card.Img variant='top' src={record.source} />
            <Card.Body>
              <Card.Title>
                {record.title}
              </Card.Title>
              <Button variant='success' size='sm'>Edit</Button>
              <Button variant='danger' size='sm'>Remove</Button>
            </Card.Body>
          </Card>
        }}
      </ListView>
    </div>
  }
}

export default connect(
  state => ({
    resource: state.resources.images
  })
)(Images)
