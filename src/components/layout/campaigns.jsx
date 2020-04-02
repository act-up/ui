import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './sidebar'
import Intro from '../pages/intro'

const Campaigns: React.Component = ({ active_issues }) => {
    console.log('state: ', this);

    return(

        <Container fluid>
          <Row>
            <Col sm={2}>
                <Sidebar></Sidebar>
                <p>{this.props.state.active_issues}</p>
            </Col>
            <Col sm={10}>
                <Intro></Intro>
            </Col>
          </Row>
        </Container>

    );
};

export default Campaigns;
