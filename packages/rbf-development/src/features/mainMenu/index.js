import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export class MainMenu extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool
  }
  render () {
    const { isLoggedIn } = this.props
    return <Navbar bg='dark' variant='dark' expand='sm'>
      <LinkContainer to='/' exact>
        <Navbar.Brand>Home</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer to='/dashboard' exact>
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <NavDropdown title='Components'>
            <LinkContainer to='/error/'>
              <NavDropdown.Item>Error</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to='/about/'>
              <NavDropdown.Item>About</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/users/'>
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/detail-view/'>
              <NavDropdown.Item>DetailView</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/forms/'>
              <NavDropdown.Item>Forms</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/test-redux/'>
              <NavDropdown.Item>Test redux</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title='Demo'>
            <LinkContainer to='/images/'>
              <NavDropdown.Item>Images</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav>
          { isLoggedIn
            ? <NavDropdown title='Hello, {user}'>
              <NavDropdown.Item href='#profile'>Profile</NavDropdown.Item>
              <LinkContainer to='/logout' exact>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            : <LinkContainer to='/login' exact>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer> }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  }
}

export default connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn
  })
)(MainMenu)
