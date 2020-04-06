import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Container, Grid, Header, Button } from 'semantic-ui-react';

const Issue1: React.StatelessComponent = () => {
    return(
        <Container text>
            <Header as='h1'>Trader Joe's: Please pay your workers hazard pay during COVID-19 pandemic!</Header>

            <p>ISSUE DESCRIPTION HERE</p>

            <p>LETTER HERE</p>

            <Grid>
                <Grid.Row centered>
                    <Button color='blue' variant='primary'><a class='whitelink' href='https://www.traderjoes.com/contact-us/product-feedback' target="_blank">Go to Contact Page</a></Button>
                </Grid.Row>

                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
            </Grid>
        </Container>
    );
};

export default Issue1;
