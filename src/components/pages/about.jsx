import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Grid, Header, Image } from 'semantic-ui-react';

const About = () => (
    <div className='about'>
        <Grid padded>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Header as='h1' floated='right'>About</Header>
                </Grid.Column>
                <Grid.Column width={8}>
                    <p> We are a small team of enthusiastic volunteers who want to find actionable ways to make a difference for the planet. Inspired by letter-writing campaigns used to
                        call for civic action around the world, we wanted to take that same approach to demand action on waste reduction, environmental sustainability, and workers' rights
                        from the companies and corporations that we support with our hard-earned dollars.
                    </p>

                    <p> Our goal is to make it as easy as possible for you to use your voice to speak up for change. We provide researched issues, contact information, and template letters
                        so that you can
                    </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Header as='h1' floated='right'>Our Team</Header>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid.Row>
                        <p>We're always looking for justice-minded individuals to get involved. If you're interested in helping out, please email act [dot] up [dot] advocacy [at] gmail.com
                        (contact form coming soon!)</p>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Image src='https://raw.githubusercontent.com/act-up/ui/master/public/logo.png' size='small' />
                        </Grid.Column>
                        <Grid.Column width={6}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
        </Grid>

    </div>
);

export default About;
