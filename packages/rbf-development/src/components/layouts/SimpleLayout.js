import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

const styles = {
  container: bgImage => ({
    backgroundImage: bgImage ? `url(${bgImage})` : null,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: 100,
    paddingBottom: 100
  }),
  cardTitle: {
    textAlign: 'center',
    marginTop: 16
  }
}

const SimpleLayout = ({ children, bgImage }) => (
  <Container fluid style={styles.container(bgImage)}>
    { children }
  </Container>
)

SimpleLayout.propTypes = {
  bgImage: PropTypes.string
}

SimpleLayout.defaultProps = {
  bgImage: ''
}

export default SimpleLayout
