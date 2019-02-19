import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Breadcrumbs extends Component {
  render () {
    return <Breadcrumb>
      <LinkContainer to='/'>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>Images</Breadcrumb.Item>
    </Breadcrumb>
  }
}
