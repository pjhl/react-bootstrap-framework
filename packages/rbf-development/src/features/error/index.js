import React from 'react'
import PropTypes from 'prop-types'
import SimpleLayout from '../../components/layouts/SimpleLayout'
import { Row, Col, Card, Button } from 'react-bootstrap'

const styles = {
  codeText: {
    textAlign: 'center',
    fontSize: 120,
    marginBottom: 0
  },
  messageText: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: -18,
    marginBottom: 16
  },
  oopsImg: {
    height: 256,
    width: 256,
    textAlign: 'center'
  }
}

const ErrorFeature = ({ code, message, description }) => (
  <SimpleLayout paddingTop={20}>
    <Row>
      <Col lg={{ span: 6, offset: 3 }} md={{ span: 10, offset: 1 }}>
        <Card>
          <Card.Body>
            <h1 style={styles.codeText}>{ code }</h1>
            { message && <h2 style={styles.messageText}>{ message }</h2> }
            { description && <p>{ description }</p> }
            <div>
              <Button variant='primary'>Back</Button>
              <Button variant='default'>Home</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  </SimpleLayout>
)

ErrorFeature.propTypes = {
  code: PropTypes.number,
  message: PropTypes.string,
  description: PropTypes.string
}

ErrorFeature.defaultProps = {
  code: 404,
  message: 'Something\'s wrong here',
  description: ''
}

export default ErrorFeature
