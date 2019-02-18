import LoginForm from './LoginForm'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  onLoginSubmit: (values) => {
    dispatch({ type: 'LOGIN_REQUESTED', payload: values })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)
