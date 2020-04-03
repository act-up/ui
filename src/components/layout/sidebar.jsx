import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IssueContext from './context';

// Semantic UI layout and styling
import { Grid, Form, Input, TextArea, Button, Select, Header } from 'semantic-ui-react';

class Sidebar extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;

        return(

            <IssueContext.Consumer>
                {value, ({updateIssue}) => (

                    <Grid padded>

                      <Grid.Row>
                        <Grid.Column>
                            <Header as='h2'>Active Issues</Header>
                        </Grid.Column>
                      </Grid.Row>

                      {value.active_issues.map((issue) => (
                          <Grid.Row>
                            <Grid.Column>
                                <Link to='/' value={issue.id}
                                    onClick={() => updateIssue(issue.id)}>
                                    {issue.issue_name}
                                </Link>
                            </Grid.Column>
                          </Grid.Row>

                      ))}

                      <Grid.Row>

                      </Grid.Row>
                    </Grid>

                )}
            </IssueContext.Consumer>

        )
    }
};

export default Sidebar;
