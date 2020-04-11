import React from 'react';
import { Link } from 'react-router-dom';

// Semantic UI layout and styling
import { Grid, Header, Image } from 'semantic-ui-react';

var teamColumnWidth = 3;

const AboutDescription = () => {
    return (
        <div>
            <p>
                We are a small team of enthusiastic volunteers who want to find actionable ways to make a difference for the planet. Inspired by letter-writing campaigns used to
                call for civic action around the world, we wanted to take that same approach to demand action on waste reduction, environmental sustainability, and workers' rights
                from the companies and corporations that we support with our hard-earned dollars.
            </p>
            <p>
                Our goal is to make it as easy as possible for you to use your voice for change. We provide researched issues, template letters, and contact information
                so that you can easily contact corporations and speak up on actionable environmental issues.
            </p>
        </div>
    )
};

const AboutTeam = () => {
    return (
    <div>
    <Grid.Row>
        <p>We're always looking for justice-minded individuals to get involved. If you're interested in helping out, please <Link className='clickable_link' to='/contact'> contact us</Link>.</p>
    </Grid.Row>
    <Grid.Row>
        <p>&nbsp;</p>
    </Grid.Row>
    <Grid stackable centered columns={2}>
        <Grid.Row>
            <Grid.Column width={teamColumnWidth} floated='left'>
                <Image src='https://raw.githubusercontent.com/act-up/ui/static_site/public/img/antonella.jpg' size='small' />
            </Grid.Column>
            <Grid.Column width={12} floated='left'>
                <p> <a href="https://antonellawilby.com/" target="_blank" rel="noopener noreferrer">Antonella</a> is an engineering graduate student, photographer, and founder of Act.Up.
                    Wanting to make a difference in the world, but frustrated by the passivity of online petitions and endless tweeting, she developed Act.Up in hopes of
                    empowering people to take small, actionable steps towards a healthier planet and a happier society. As both an engineer and avid outdoorswoman, her work
                    focuses on using technology to combat environmental issues and help scientists understand the ocean. Find her at <a href="https://www.instagram.com/aaaaaantonella/" target="_blank" rel="noopener noreferrer">@aaaaaantonella</a> and
                    &nbsp;<a href="https://twitter.com/antonellawilby" target="_blank" rel="noopener noreferrer">@antonellawilby</a>.
                </p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={teamColumnWidth} floated='left'>
                <Image src='https://raw.githubusercontent.com/act-up/ui/static_site/public/img/francesca.jpg' size='small' />
            </Grid.Column>
            <Grid.Column width={12} floated='left'>
                <p> Francesca is a motorcycle mechanic, dancer, adventurer, and dog enthusiast who has gotten really tired of feeling like modern activism mostly consists of shouting into the void. As a person who cares deeply about the environment, animals, and leaving things better than you found them, she joined Act.Up to help increase accessibility to people who want to make a difference. You can find her on Instagram at <a href="https://www.instagram.com/tigerbeatdown/" target="_blank" rel="noopener noreferrer">@tigerbeatdown</a>.
                </p>
            </Grid.Column>
        </Grid.Row>
        {/*}<Grid.Row>
            <Grid.Column width={4} floated='left'>
                <Image src='https://raw.githubusercontent.com/act-up/ui/static_site/public/img/antonella.jpg' size='small' />
            </Grid.Column>
            <Grid.Column width={12} floated='left'>
                <p> Mugdha
                </p>
            </Grid.Column>
        </Grid.Row>*/}
    </Grid>
    </div>
    );
};

const About = () => {
    return (
        <div className='about'>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header as='h1' floated='right'>About</Header>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <AboutDescription />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header as='h1' floated='right'>Our Team</Header>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <AboutTeam />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    );
};

export default About;

const AboutMobile = () => {
    return (
        <div className='MobileContentPadding'>
            <Grid>
                <Header as='h1'>About</Header>
                <AboutDescription />

                <Header as='h1'>Our Team</Header>
                <AboutTeam />

            </Grid>
        </div>
    );
};

export {
    About,
    AboutMobile,
}
