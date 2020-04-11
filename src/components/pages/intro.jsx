import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Grid, Header, Button, Message } from 'semantic-ui-react';

const Intro: React.StatelessComponent = () => {
    return(
        <Grid>
            <Grid.Column width={16}>
            <Header as='h1'>Take action for our planet.</Header>

            <p>We are a grassroots advocacy campaign that wants to empower you to take action on behalf of our planet.</p>

            <p>
                We make it easy for you to contact the companies you give your hard-earned dollars
                to and encourage them to change their practices for the good of the planet and the
                good of the people. We believe that if enough people speak up for change, corporations will
                pay attention.
            </p>

            <Message visible color='teal'>This site is currently in development. Please forgive any bugs or UI issues
            as we will be working to correct them in the coming weeks.</Message>

            <p>
                Select an active campaign on the left. We provide a letter template outlining the issue and a link to the
                best contact page to email the company. Some companies also use Twitter to communicate with customers, and we will
                include a Twitter Direct Message link in this case. We encourage you to reach out in as many ways as possible!
                The more we speak up, the more incentive they have to listen!
            </p>



            <p>
                We are just getting started, and will be expanding this site with new issues and new capabilities in the coming months.
                If you have an issue in mind for a new campaign, we will have a suggestion form on this site soon. Our team will research
                the issue, draft advocacy materials, and create a new campaign on this site. Please check back soon for our suggestion form,
                or <Link to='/subscribe' className='clickable_link'>subscribe to our email list</Link> to be notifed when we open up campaign suggestions.
            </p>

            {/*<p>
                If you have an idea for a new campaign, please use the button below to suggest a new issue.
                Our team will research the issue, draft advocacy materials, and create a new campaign on the site.
            </p>*/}


            {/*<Grid.Row centered>
                <Button color='blue' variant='primary'><Link class='whitelink' to='/suggestions'>Suggest a New Campaign</Link></Button>
            </Grid.Row>*/}
            </Grid.Column>
            <Grid.Row></Grid.Row>
        </Grid>


    );
};

export default Intro;
