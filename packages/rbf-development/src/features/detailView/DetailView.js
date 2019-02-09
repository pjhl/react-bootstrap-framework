import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import DetailViewRecord from './DetailViewRecord'

export default class DetailView extends Component {
  static propTypes = {
    children: PropTypes.func
  }
  static defaultProps = {
    children: () => {}
  }
  render () {
    const { record, children } = this.props
    const item = () => new DetailViewRecord(record)
    return (
      <ListGroup variant='flush'>
        { children(item) }
      </ListGroup>
    )
  }
}
