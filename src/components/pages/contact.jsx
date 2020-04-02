import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Contact = () => (
  <div className='contact'>

    <h1>Contact Us</h1>

    <Container>
        <Row>
            <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Questions? Comments? Please use the form below to contact us.</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Please don't use this form to suggest a new issue campaign. Please use the button at the top of the page or <NavLink to='/suggestions'>click here</NavLink>.
                  </Form.Text>
                </Form.Group>
            </Form>
        </Row>
    </Container>

  </div>
);

export default Contact;
