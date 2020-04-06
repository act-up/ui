import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import IssueContext from '../layout/context';

// Semantic UI layout and styling
import { Container, Grid, Header, Button } from 'semantic-ui-react';

class Issue extends Component {

    static contextType = IssueContext;

    render() {

        return(

            <IssueContext.Consumer>
                {value => (
                    <Container text>
                        <Header as='h1'>
                            {value.active_issues[value.selected_issue-1].issue_name}
                        </Header>

                        <p>{value.active_issues[value.selected_issue-1].issue_description}</p>


                        <Grid>
                            <Grid.Row centered>
                                <Button color='blue' variant='primary'><Link class='whitelink' to='#'>Go to Contact Page</Link></Button>
                            </Grid.Row>
                        </Grid>
                    </Container>
                )}
            </IssueContext.Consumer>

        )
    }
};

export default Issue;
