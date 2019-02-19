import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  Login as LoginFeature,
  Logout as LogoutFeature
} from '../features/login/index'
import ErrorFeature from '../features/error/index'
import DetailViewFeature from '../features/detailView/index'
import FormsFeature from '../features/forms/index'
import TestReduxFeature from '../features/testRedux/index'
import MainMenu from '../features/mainMenu/'
import { Container } from 'react-bootstrap'
import ImagesFeature from '../features/images/'

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
      <MainMenu />
      <Container fluid>
        <Route path='/' exact component={Index} />
        <Route path='/about/' component={About} />
        <Route path='/users/' component={Users} />
        <Route path='/login/' component={LoginFeature} />
        <Route path='/logout/' component={LogoutFeature} />
        <Route path='/error/' render={(props) => (
          <ErrorFeature {...props}
            code={404}
            message='NotFound'
            description={'We can\'t find the page you\'re looking for.'} />
        )} />
        <Route path='/detail-view/' component={DetailViewFeature} />
        <Route path='/forms/' component={FormsFeature} />
        <Route path='/test-redux/' component={TestReduxFeature} />
        <Route path='/images/' component={ImagesFeature} />
      </Container>
    </div>
  </Router>
)

export default AppRouter
