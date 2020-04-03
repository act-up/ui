import React, {Component} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import IssueContext from '../layout/context'

class Issue extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;

        return(

            <IssueContext.Consumer>
                {value => (

                    <Jumbotron fluid>
                      <Container>

                        <h1>{value.active_issues[value.selected_issue-1].issue_name}</h1>

                        <p>{value.active_issues[value.selected_issue-1].issue_description}</p>

                      </Container>
                    </Jumbotron>
                )}
            </IssueContext.Consumer>

        )
    }
};

export default Issue;
