import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import LoginFeature from '../features/login/index'
import ErrorFeature from '../features/error/index'
import DetailViewFeature from '../features/detailView/index'
import FormsFeature from '../features/forms/index'

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
        <LinkContainer to='/error/'>
          <Button variant='primary'>Error</Button>
        </LinkContainer>
        <LinkContainer to='/detail-view/'>
          <Button variant='primary'>DetailView</Button>
        </LinkContainer>
        <LinkContainer to='/forms/'>
          <Button variant='primary'>Forms</Button>
        </LinkContainer>
      </nav>
      <hr />

      <Route path='/' exact component={Index} />
      <Route path='/about/' component={About} />
      <Route path='/users/' component={Users} />
      <Route path='/login/' component={LoginFeature} />
      <Route path='/error/' render={(props) => (
        <ErrorFeature {...props}
          code={404}
          message='NotFound'
          description={'We can\'t find the page you\'re looking for.'} />
      )} />
      <Route path='/detail-view/' component={DetailViewFeature} />
      <Route path='/forms/' component={FormsFeature} />
    </div>
  </Router>
)

export default AppRouter
