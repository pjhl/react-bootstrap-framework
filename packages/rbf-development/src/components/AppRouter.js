import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import LoginFeature from '../features/login/index'

const Index = () => (
  <Fragment>
    <h2>Home</h2>
    <button className='btn btn-primary'>primary button</button>
  </Fragment>
)
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <LinkContainer to='/' exact>
          <Button variant='default'>Home</Button>
        </LinkContainer>
        <LinkContainer to='/about/'>
          <Button variant='default'>About</Button>
        </LinkContainer>
        <LinkContainer to='/users/'>
          <Button variant='default'>Users</Button>
        </LinkContainer>
        <LinkContainer to='/login/'>
          <Button variant='primary'>Login</Button>
        </LinkContainer>
      </nav>
      <hr />

      <Route path='/' exact component={Index} />
      <Route path='/about/' component={About} />
      <Route path='/users/' component={Users} />
      <Route path='/login/' component={LoginFeature} />
    </div>
  </Router>
)

export default AppRouter
