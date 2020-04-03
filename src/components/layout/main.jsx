import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './sidebar'
import Content from './content'
import IssueContext from './context'

class Main extends Component {
    
    static contextType = IssueContext;

    render() {
        let value = this.context;
        console.log(value)

        return(


            <IssueContext.Consumer>
                {value => (
                    <Container fluid>
                        <Row>
                            <Col sm={3}>
                                <IssueContext.Provider value={value}>
                                    <Sidebar />
                                </IssueContext.Provider>
                            </Col>
                            <Col sm={9}>
                                <IssueContext.Provider value={value}>
                                    <Content />
                                </IssueContext.Provider>
                            </Col>
                        </Row>
                    </Container>
                )}
            </IssueContext.Consumer>
        )

    }
}
export default Main;
