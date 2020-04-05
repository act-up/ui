import React, {Component} from 'react';
import IssueContext from '../layout/context';

// Semantic UI layout and styling
import { Grid, Header } from 'semantic-ui-react';

class Issue extends Component {

    static contextType = IssueContext;

    render() {

        return(

            <IssueContext.Consumer>
                {value => (
                    <Grid>
                        <Grid.Row>
                            <Header as='h1'>
                                {value.active_issues[value.selected_issue-1].issue_name}
                            </Header>
                            <p>{value.active_issues[value.selected_issue-1].issue_description}</p>
                        </Grid.Row>
                        <Grid.Row></Grid.Row>
                    </Grid>
                )}
            </IssueContext.Consumer>

        )
    }
};

export default Issue;
