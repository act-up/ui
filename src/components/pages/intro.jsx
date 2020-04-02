import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Intro: React.StatelessComponent = () => {
    return(

        <Jumbotron fluid>
          <Container>
            <h1>Take action for our planet.</h1>
            <p>
                We are a grassroots advocacy campaign that wants to empower you to take action on behalf of our planet.
            </p>

            <p>
                We make it easy for you to contact the companies you give your hard-earned dollars
                to and encourage them to change their practices for the good of the planet and the
                good of the people. We believe that if enough people speak up for change, corporations will
                pay attention.
            </p>

            <p>
                Select an active campaign on the left, or use the button below to suggest a new campaign.
                Our team will research the issue, draft advocacy materials, and create a new campaign on the site.
            </p>

            <p>
                <Button variant="primary">Learn more</Button>
            </p>
          </Container>
        </Jumbotron>

    );
};

export default Intro;
