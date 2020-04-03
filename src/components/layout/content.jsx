import React, {Component} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import IssueContext from './context'
import Intro from '../pages/intro'
import Issue from '../pages/issue'

class Content extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;

        var contentToDisplay;
        if (value.selected_issue == 0) {
            contentToDisplay = <Intro />
        } else {
            contentToDisplay = <Issue />
        }

        return(

            <IssueContext.Consumer>
                {value => (
                    <Jumbotron fluid>
                      <Container>
                        {contentToDisplay}
                      </Container>
                    </Jumbotron>
                )}
            </IssueContext.Consumer>

        )
    }
};

export default Content;
