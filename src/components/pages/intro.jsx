import React from 'react';

// Semantic UI layout and styling
import { Grid, Header, Button } from 'semantic-ui-react';

const Intro: React.StatelessComponent = () => {
    return(
        <Grid>
            <Header as='h1'>Take action for our planet.</Header>

            <p>We are a grassroots advocacy campaign that wants to empower you to take action on behalf of our planet.</p>

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

            <Button variant="primary">Learn more</Button>

        </Grid>
    );
};

export default Intro;
