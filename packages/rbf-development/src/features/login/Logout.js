import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Logout extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logoutAction: PropTypes.func
  }
  logout () {
    if (this.props.isLoggedIn) {
      this.props.logoutAction()
    }
  }
  componentDidMount () {
    this.logout()
  }
  componentDidUpdate () {
    this.logout()
  }
  render () {
    const { isLoggedIn } = this.props
    if (!isLoggedIn) {
      return <Redirect to='/login' />
    }
    return (
      <div>Logging out...</div>
    )
  }
}

export default connect(
  state => ({
    isLoggedIn: state.auth.isLoggedIn
  }),
  dispatch => ({
    logoutAction: () => {
      dispatch({ type: 'LOGOUT' })
    }
  })
)(Logout)
