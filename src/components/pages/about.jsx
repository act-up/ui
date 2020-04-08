import React from 'react';

// Semantic UI layout and styling
import { Container, Grid, Header, Image } from 'semantic-ui-react';

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
        <p>We're always looking for justice-minded individuals to get involved. If you're interested in helping out, please email act [dot] up [dot] advocacy [at] gmail.com
        (contact form coming soon!)</p>
    </Grid.Row>
    <Grid.Row>
        <p>&nbsp;</p>
    </Grid.Row>
    <Grid>
        <Grid.Row>
            <Grid.Column width={4} floated='left'>
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
            <Grid.Column width={4} floated='left'>
                <Image src='https://raw.githubusercontent.com/act-up/ui/static_site/public/img/antonella.jpg' size='small' />
            </Grid.Column>
            <Grid.Column width={12} floated='left'>
                <p> Mugdha
                </p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4} floated='left'>
                <Image src='https://raw.githubusercontent.com/act-up/ui/static_site/public/img/antonella.jpg' size='small' />
            </Grid.Column>
            <Grid.Column width={12} floated='left'>
                <p> Francesca
                </p>
            </Grid.Column>
        </Grid.Row>
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
        <div className='about'>
            <Container text>
                <Header as='h1'>About</Header>
                <AboutDescription />

                <Header as='h1'>Our Team</Header>
                <AboutTeam />

            </Container>
        </div>
    );
};

export {
    About,
    AboutMobile,
}
