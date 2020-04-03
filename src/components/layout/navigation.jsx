import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import IssueContext from './context';

// Semantic UI layout and styling
import { Container, Menu, Button, Image } from 'semantic-ui-react';

class Navigation extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;
        var default_issue = 0;

        return(
            <IssueContext.Consumer>
                {value, ({updateIssue}) => (

                    <Menu secondary size='small'>
                        <Container>
                            <Menu.Item
                                name="Home"
                                onClick={() => updateIssue(default_issue)}
                                as='a'>
                                <NavLink to='/'><Image src='https://raw.githubusercontent.com/act-up/ui/master/public/logo.png' size='small' /></NavLink>
                            </Menu.Item>

                            <Menu.Item position='right'>
                                <Button as='a'style={{ marginLeft: '0.25em' }}>
                                    <NavLink to='/suggestions'>Suggest an Issue</NavLink>
                                </Button>
                                <Button as='a'style={{ marginLeft: '0.5em' }}>
                                    <NavLink to='/donate'>Donate</NavLink>
                                </Button>
                            </Menu.Item>

                        </Container>
                    </Menu>
                )}
            </IssueContext.Consumer>
        )
    }
};

export default Navigation;
