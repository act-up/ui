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

        let issue1_name = "Trader Joe's: Please pay your workers hazard pay during COVID-19 pandemic!";
        let issue2_name = "CA Governor Gavin Newsom: Please require hazard pay for grocery workers during the COVID-19 pandemic!";

        const { activeItem } = this.state

        //console.log(JSON.parse(value.active_issues[0]))

        return(

            <IssueContext.Consumer>
            {value, ({updateIssue}) => (

                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h2'>Active Issues</Header>

                                <Menu fluid vertical tabular>
                                    <Link to="#" value="1" onClick={() => updateIssue(1)}>
                                        <Menu.Item
                                            name="issue1"
                                            active={activeItem === 1}
                                            onClick={this.handleItemClick}>
                                            {issue1_name}
                                        </Menu.Item>
                                    </Link>
                                    <Link to="#" value="2" onClick={() => updateIssue(2)}>
                                        <Menu.Item
                                            name="issue2"
                                            active={activeItem === 2}
                                            onClick={this.handleItemClick}>
                                            {issue2_name}
                                        </Menu.Item>
                                    </Link>

                                </Menu>

                            {/*}{value.active_issues.map((issue) => (
                                <Menu fluid vertical tabular>
                                    <Link to={issue.id} value={issue.id}
                                        onClick={() => updateIssue(issue.id)}>
                                        <Menu.Item
                                            name={issue.issue}
                                            active={activeItem === issue.issue_name}
                                            onClick={this.handleItemClick} />
                                    </Link>
                                </Menu>
                            ))}*/}

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
