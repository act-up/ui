import React, { StatelessComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './sidebar'
import Intro from '../pages/intro'

const Campaigns: React.StatelessComponent = () => {
    return(

        <Container fluid>
          <Row>
            <Col sm={2}>
                <Sidebar></Sidebar>
            </Col>
            <Col sm={10}>
                <Intro></Intro>
            </Col>
          </Row>
        </Container>

    );
};

export default Campaigns;
