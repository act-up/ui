import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IssueContext from './context';

// Semantic UI layout and styling
import { Grid, Menu, Button, Image, Icon, Sidebar } from 'semantic-ui-react';


const default_issue = 0;


class NavBarMobile extends Component {

    render() {
        let value = this.context;
        const visible = this.context.visible;

        let prop = this.props;

        console.log("visible in nav:", visible);

        return (
            <div>

             {/*}<IssueContext.Consumer>
            {value => (


            )}
            </IssueContext.Consumer>


                 <Menu fixed="top">
                    <Menu.Item>
                      <Image size="small" src="https://raw.githubusercontent.com/act-up/ui/master/public/logo.png" />
                    </Menu.Item>
                    <Menu.Item position="right">
                      <Icon name="sidebar" />
                    </Menu.Item>
                  </Menu>

                  <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                  </Menu.Item>
                  <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                  </Menu.Item>
                  <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                  </Menu.Item>*/}

            </div>
        )
    }
};

class NavBarDesktop extends Component {

    render() {
        let value = this.context;

        return(
            <IssueContext.Consumer>
            {value, ({updateIssue}) => (

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5} floated='right'>
                                <Menu secondary position='right'
                                    name="Home"
                                    onClick={() => updateIssue(default_issue)}
                                    as={ Link }
                                    to='/'
                                    >
                                        <Image style={{ marginLeft: '8em' }} src='https://raw.githubusercontent.com/act-up/ui/master/public/logo.png' size='small' />
                                </Menu>
                        </Grid.Column>
                        <Grid.Column floated='right' width={10}>
                            <Button.Group floated='right'>
                                <Button compact
                                    as={ Link }
                                    to='/'
                                    onClick={() => updateIssue(default_issue)}
                                    color='teal'>
                                    Active Issues</Button>
                                <Button compact as={ Link } to='/subscribe' color='teal' style={{ marginLeft: '0.25em', marginRight: '1em' }}>Subscribe</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )}
            </IssueContext.Consumer>

        )
    }
}
export default NavBarDesktop;



export {
    NavBarMobile,
    NavBarDesktop,
}
