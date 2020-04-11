import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import IssueContext from '../layout/context';

// Semantic UI layout and styling
import { Container, Grid, Header, Button, Segment, Label } from 'semantic-ui-react';



class Issue extends Component {

    static contextType = IssueContext;

    render() {

        let value = this.context;

        let myString = "Informaci\u2022n"

        /*let letter_display = letter_body.split('\n').map((item, i) => {
            return <p>{item}</p>;
        });*/

        //console.log(value.active_issues[value.selected_issue-1].ContactInfo.email)

        //let mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(letter_body);


        return(

            <IssueContext.Consumer>
                {value => (
                    <Container text>
                        <Header as='h1'>
                            {value.active_issues[value.selected_issue-1].Issue.IssueName}
                        </Header>

                        <p>{myString}</p>

                        <p>{value.active_issues[value.selected_issue-1].Issue.Description}</p>

                        <p>{value.active_issues[value.selected_issue-1].ContactInfo.email}</p>

                        <Segment>
                            <Label attached='top' color='blue'>Feel free to add a personal touch to the template below. Please remember to be kind and civil.</Label>

                            <p>{value.active_issues[value.selected_issue-1].Issue.Salutation}</p>

                            <p>{value.active_issues[value.selected_issue-1].Issue.FormLetter}</p>

                            <p>{value.active_issues[value.selected_issue-1].Issue.Valediction}</p>



                        </Segment>


                        <Grid>
                            <Grid.Row centered>
                                <Button color='blue' variant='primary'><Link class='whitelink' to='#'>Send Email</Link></Button>
                            </Grid.Row>
                        </Grid>
                    </Container>
                )}
            </IssueContext.Consumer>

        )
    }
};

export default Issue;
