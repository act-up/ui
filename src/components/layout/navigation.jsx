import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IssueContext from './context';

// Semantic UI layout and styling
import { Grid, Menu, Button, Image } from 'semantic-ui-react';

class Navigation extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;
        var default_issue = 0;

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
                                    <Button compact as={ Link } to='/' color='teal'>Active Issues</Button>
                                    <Button compact as={ Link } to='/subscribe' color='teal' style={{ marginLeft: '0.25em' }}>Subscribe</Button>
                                </Button.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                )}
            </IssueContext.Consumer>
        )
    }
};

export default Navigation;
