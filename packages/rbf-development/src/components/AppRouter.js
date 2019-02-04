import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'

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
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/users/'>Users</Link>
          </li>
        </ul>
      </nav>

      <h1>React router bootstrap nav:</h1>
      <nav>
        <LinkContainer to='/' exact>
          <Button variant='primary'>Home</Button>
        </LinkContainer>
        <LinkContainer to='/about/'>
          <Button variant='primary'>About</Button>
        </LinkContainer>
        <LinkContainer to='/users/'>
          <Button variant='primary'>Users</Button>
        </LinkContainer>
      </nav>

      <Route path='/' exact component={Index} />
      <Route path='/about/' component={About} />
      <Route path='/users/' component={Users} />
    </div>
  </Router>
)

export default AppRouter
