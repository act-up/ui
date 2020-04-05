import React from 'react';

// Semantic UI layout and styling
import { Grid, Header } from 'semantic-ui-react';

const Impact = () => (
    <div className='impact'>
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Header as='h1' floated='right'>Impact</Header>
                </Grid.Column>
                <Grid.Column width={8}>
                    <p>Once this platform gets going, we will display usage statistics and issue results here!</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
        </Grid>
    </div>
);

export default Impact;
