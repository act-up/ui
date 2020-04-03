import React from 'react';

// Semantic UI layout and styling
import { Grid, Header } from 'semantic-ui-react';

const Donate = () => (
    <div className='donate'>
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Header as='h1' floated='right'>Donate</Header>
                </Grid.Column>
                <Grid.Column width={8}>
                    <p>We are a very small team of volunteers passionate about making a difference for the planet. If you would like to make a small donation to cover our operating costs, it would be much appreciated!</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

export default Donate;
