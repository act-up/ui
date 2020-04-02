import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './sidebar'
import Content from './content'

const Main: React.Component = ({ active_issues }) => {

    return(

        <Container fluid>
          <Row>
            <Col sm={3}>
                <Sidebar active_issues={active_issues} />
            </Col>
            <Col sm={9}>
                <Content />
            </Col>
          </Row>
        </Container>

    );
};

export default Main;
