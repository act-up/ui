import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Container, Grid, Header, Button, Segment, Label } from 'semantic-ui-react';

const Issue2: React.StatelessComponent = () => {
    return(
        <Container text>
            <Header as='h1'>CA Governor Gavin Newsom: Please require hazard pay for grocery workers during the COVID-19 pandemic!</Header>

            <p>Grocery store workers are on the front lines of the ongoing COVID-19 pandemic. While some of us have jobs that allow us to shelter in place at home,
            grocery workers' jobs are essential to ensuring we have uninterrupted access to food and other critical supplies during this crisis. These workers are at great risk
            of being exposed to the virus, and of transmitting the virus to their loved ones.</p>

            <p>Grocery workers deserve hazard pay for risking their health to perform an essential societal function. Despite their workers' front line roles in this global health crisis,
            many grocers (such as Trader Joe's) are not paying their workers hazard pay. If you're a Californian who buys groceries (we know you do), please take a few seconds to contact
            Governer Newsom using the letter below to speak up for the rights of California's grocery workers and encourage him to support hazard pay for these essential workers. </p>

            <Header as='h3'>Template Letter:</Header>

            <p>We have provided a template letter below. Copy the letter, click the contact button to go to Governor Newsom's contact page, and feel free to edit the letter to add a personal touch.
            On the contact page, you will have to provide your name and an email to send the letter. We recommend selecting "COVID-19" for the subject.</p>

            <Segment>
                <Label attached='top' color='blue'>Feel free to add a personal touch to the template below. Please remember to be kind and civil.</Label>

                <p>Dear Governor Newsom,</p>

                <p>I’m writing to express my concern that many grocery store workers in the state of California are not receiving hazard pay during the COVID-19 pandemic. These workers are on the front lines of the disease. Over the course of a single shift, they are exposed to countless people who may be infected--whether customers, co-workers, or someone in the supply chain--thereby increasing the risk to their own well being,as well as anyone else they come in contact with. Because the jobs these workers perform are simply too important, they are unable to follow any-shelter at-home mandate, and their pay should reflect this. A one-time bonus is not enough. A very small increase is not enough. These workers are people with full lives and loved ones, who are putting their lives at risk doing a job that our society needs done in order to function. Due to the highly contagious nature of this disease, and the fact that everyone needs to eat (including the elderly, immunocompromised, and other vulnerable people), I implore you to require grocery stores to require a safe work environment and provide their employees with hazard pay, protective equipment, and appropriate sick leave.</p>

                <p>Sincerely,</p>

                <p>A concerned human</p>

            </Segment>



            <Grid>
                <Grid.Row centered>
                    <Button color='blue' variant='primary'><a class='whitelink' href='https://govapps.gov.ca.gov/gov40mail/' target='_blank' rel='noopener noreferrer'>Go to Contact Page</a></Button>
                </Grid.Row>

                <Grid.Row></Grid.Row>

            </Grid>
        </Container>
    );
};

export default Issue2;
