import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IssueContext from './context';

// Semantic UI layout and styling
import { Grid, Header, Menu } from 'semantic-ui-react';


class Sidebar extends Component {

    static contextType = IssueContext;

    state = { activeItem: 'bio' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        let value = this.context;
        const { activeItem } = this.state

        //console.log(JSON.parse(value.active_issues[0]))

        return(

            <IssueContext.Consumer>
            {value, ({updateIssue}) => (

                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2'>Active Issues</Header>

                            {value.active_issues.map((issue) => (
                                <Menu fluid vertical tabular>
                                    <Link to={issue.id} value={issue.id}
                                        onClick={() => updateIssue(issue.id)}>
                                        <Menu.Item
                                            name={issue.Issue.IssueName}
                                            active={activeItem === issue.Issue.IssueName}
                                            onClick={this.handleItemClick} />
                                    </Link>
                                </Menu>
                            ))}

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        {/*<Grid.Column width={12}>
                            <Form>
                            <Form.Field
                              id='form-input-control-email'
                              control={Input}
                              label='Sign up for Campaign Alerts'
                              placeholder='email@example.com'
                            />
                            <Form.Field
                              id='form-button-control-public'
                              control={Button}
                              content='Subscribe'
                            />
                          </Form>
                          <p>Sign up for emails if you would like to be notified of new campaigns. You can unsubscribe at any time.</p>
                        </Grid.Column>*/}
                    </Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                </Grid>

            )}
            </IssueContext.Consumer>

        )
    }
};

export default Sidebar;
