import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'

const Sidebar: React.Component = ({ active_issues }) => {
    return(

        <Container>
          <Row>
            <header>Active Campaigns</header>
          </Row>


          {active_issues.map((issue) => (
              <Row>{issue.issue_name}</Row>

              ))}
              <Row>&nbsp;</Row>
              
          <Row>
            <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Sign up for Campaign Alerts</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Please sign up for emails if you would like to be notified of new campaigns. You can unsubscribe from emails at any time.
                  </Form.Text>
                </Form.Group>
            </Form>
          </Row>
        </Container>

    );
};

export default Sidebar;
