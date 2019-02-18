import React, { Component } from 'react'
import SimpleLayout from '../../components/layouts/SimpleLayout'
import bgImage from '../../images/login-bg-sky.jpg'
import { Row, Col, Card } from 'react-bootstrap'
import LoginFormContainer from './components/LoginFormContainer'

const styles = {
  cardTitle: {
    textAlign: 'center',
    marginTop: 16
  },
  hintParagraph: {
    color: '#888',
    fontSize: '0.8em',
    textAlign: 'center',
    marginTop: 12
  }
}

export default class Login extends Component {
  render () {
    return (
      <SimpleLayout bgImage={bgImage}>
        <Row>
          <Col lg={{ span: 4, offset: 4 }} md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Title style={styles.cardTitle}>
                Login
              </Card.Title>
              <Card.Body>
                <LoginFormContainer />
              </Card.Body>
            </Card>
            <p style={styles.hintParagraph}>
              Demo access: admin@gmail.com:admin
            </p>
          </Col>
        </Row>
      </SimpleLayout>
    )
  }
}
