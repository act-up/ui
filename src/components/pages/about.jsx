import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Grid, Header } from 'semantic-ui-react';

const About = () => (
    <div className='about'>
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Header as='h1' floated='right'>About</Header>
                </Grid.Column>
                <Grid.Column width={8}>
                    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Header as='h1' floated='right'>Our Team</Header>
                </Grid.Column>
                <Grid.Column width={8}>
                    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
        </Grid>

    </div>
);

export default About;
