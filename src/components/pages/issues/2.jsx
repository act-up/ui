import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Container, Grid, Header, Button } from 'semantic-ui-react';

const Issue2: React.StatelessComponent = () => {
    return(
        <Container text>
            <Header as='h1'>CA Governor Gavin Newsome: Please categorize grocery workers as essential workers during COVID-19 pandemic!</Header>

            <p>ISSUE DESCRIPTION HERE</p>

            <p>LETTER HERE</p>



            <Grid>
                <Grid.Row centered>
                    <Button color='blue' variant='primary'><Link class='whitelink' to='#' target="_blank">Go to Contact Page</Link></Button>
                </Grid.Row>

                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
            </Grid>
        </Container>
    );
};

export default Issue2;
