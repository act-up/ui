import React from 'react';
import { Link } from 'react-router-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';

// Semantic UI layout and styling
import { Grid } from 'semantic-ui-react'

const Footer: React.StatelessComponent = () => {
  return (
      <footer className='footer mt-auto py-3 bg-dark text-white'>
        <Grid columns={3} padded>
            <Grid.Row padded color='black'>
                <Grid.Column floated='left' width={6}>
                    <Link class='footerlink' to='/about' style={{ marginLeft: '0.75em' }}>About</Link>
                    <Link class='footerlink' to='/contact' style={{ marginLeft: '0.75em' }}>Contact</Link>
                    <Link class='footerlink' to='/privacy' style={{ marginLeft: '0.75em' }}>Privacy</Link>
                    <Link class='footerlink' to='/impact' style={{ marginLeft: '0.75em' }}>Impact</Link>
                </Grid.Column>
                <Grid.Column  width={5}>
                    <p className="text-right">&copy; 2020 Act.Up</p>
                </Grid.Column>
                <Grid.Column floated='right' width={2}>
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,255,255,0)" iconSize="4" roundness="32%" url="https://www.twitter.com/ActUpAdvocacy" size="25" />
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,255,255,0)" iconSize="4" roundness="32%" url="https://www.instagram.com/act.up.advocacy/" size="25" />
                    <SocialMediaIconsReact borderColor="rgba(255,255,255,0)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(255,255,255,0)" iconSize="5" roundness="20%" url="https://github.com/act-up" size="25" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </footer>

  );
};

export default Footer;
