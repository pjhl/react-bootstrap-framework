import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

const styles = {
  container: ({ bgImage, paddingTop, paddingBottom }) => ({
    backgroundImage: bgImage ? `url(${bgImage})` : null,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop,
    paddingBottom
  }),
  cardTitle: {
    textAlign: 'center',
    marginTop: 16
  }
}

const SimpleLayout = ({ children, bgImage, paddingTop, paddingBottom }) => (
  <Container fluid style={styles.container({
    bgImage,
    paddingTop,
    paddingBottom
  })}>
    { children }
  </Container>
)

SimpleLayout.propTypes = {
  bgImage: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number
}

SimpleLayout.defaultProps = {
  bgImage: '',
  paddingTop: 100,
  paddingBottom: 100
}

export default SimpleLayout
