import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap'
import IssueContext from './context'

class Sidebar extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;
        console.log(value.selected_issue)

        return(

            <IssueContext.Consumer>
                {value, ({updateIssue}) => (

                    <Container>
                      <Row>
                        <header>Active Campaigns</header>
                      </Row>

                      {value.active_issues.map((issue) => (
                          <Row>
                            <Link to='/' value={issue.id}
                                onClick={() => updateIssue(issue.id)}>
                                {issue.issue_name}
                            </Link>
                          </Row>

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

                )}
            </IssueContext.Consumer>

        )
    }
};

export default Sidebar;
