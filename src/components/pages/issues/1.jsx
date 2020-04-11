import React, { Component } from 'react';
import axios from 'axios';

// Semantic UI layout and styling
import { Container, Grid, Segment, Header, Button, Label } from 'semantic-ui-react';

var email = 'nhigh@traderjoes.com'
var subject = 'Hazard%20Pay%20for%20Workers%20during%20COVID-19'
var letter_body = "Dear Ms. High,\n\n I’m writing to express my concern that the workers at Trader Joe's are not receiving hazard pay during the COVID-19 pandemic. These workers are on the front lines of the disease. Over the course of a single shift, they are exposed to countless people who may be infected--whether customers, co-workers, or someone in the supply chain--thereby increasing the risk to their own well being, as well as anyone else they come in contact with. These workers are unable to follow any-shelter at-home mandate, because their jobs are simply too important. Their pay should reflect this. A one-time bonus is not enough. A very small increase is not enough. These workers are people with full lives and loved ones, who are putting their lives at risk doing a job that our society needs done in order to function. It is your responsibility as an employer to provide a safe work environment for your employees, as well as for your customers.\n\nAs a long-time Trader Joe's customer, I implore you to do the right thing and provide your employees with hazard pay, protective equipment, and appropriate sick leave. Your customers stand with your workers.\n\nSincerely,\n\nA concerned human"


var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(letter_body);


class Issue1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
                        num_forms: 0,
                        num_emails: 0,
                        num_twitter_dms: 0
                    };
        this.emailButtonClicked = this.emailButtonClicked.bind(this);
        this.patchData = this.patchData.bind(this);
    }

    componentDidMount() {
        // Use axios to get current statistics
        axios.get('https://actup-273804.uc.r.appspot.com/statistics/1')
        .then(response => {
            this.setState({
                num_forms: response.data.num_forms,
                num_emails: response.data.num_emails,
                num_twitter_dms: response.data.num_twitter_dms
            });
        })
        .catch(error => console.log('Error: ', error))
    }

    emailButtonClicked(event) {
        var new_num_emails = parseInt(this.state.num_emails) + 1;
        this.setState({ num_emails: new_num_emails });
        this.patchData();
    }

    patchData() {
        axios.patch('https://actup-273804.uc.r.appspot.com/statistics/1', {
            num_emails: this.state.num_emails
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }


    render() {

        console.log(this.state);

        let letter_display = letter_body.split('\n').map((item, i) => {
            return <p key={i}>{item}</p>;
        });

        return(
            <Container text>
                <Header as='h1'>Trader Joe's: Please pay your workers hazard pay during the COVID-19 pandemic!</Header>

                <p>Grocery store workers are on the front lines of the ongoing COVID-19 pandemic. While some of us have jobs that allow us to shelter in place at home,
                grocery workers' jobs are essential to ensuring we have uninterrupted access to food and other critical supplies during this crisis. These workers are at great risk
                of being exposed to the virus, and of transmitting the virus to their loved ones.</p>

                <p>Grocery workers deserve hazard pay for risking their health to perform an essential societal function. Despite their workers' front line roles in this global health crisis, <a className="clickable_link" href="https://www.coworker.org/petitions/trader-joe-s-crew-needs-hazard-pay-now" target="_blank" rel='noopener noreferrer'>Trader Joe's has refused</a> to pay its workers hazard pay. If you're a customer of Trader Joe's, please take a few seconds to contact them using the letter below to speak up for the rights of their workers. </p>

                <Header as='h3'>Template Letter:</Header>

                <p>We have provided a template letter below. Click the contact button to send the letter as an email to Nicole High, Director of Customer Relations Communication at Trader Joe's.</p>

                <Segment>
                    <Label attached='top' color='blue'>Feel free to add a personal touch to the template below. Please remember to be kind and civil.</Label>

                    <p>&nbsp;</p>
                    {letter_display}

                </Segment>



                <Grid>
                    <Grid.Row centered>
                        <Button onClick={this.emailButtonClicked} color='blue' variant='primary'><a className='whitelink' href={mailto_link} target='_blank' rel='noopener noreferrer'>Email Trader Joe's</a></Button>
                    </Grid.Row>

                    <Grid.Row></Grid.Row>
                </Grid>
            </Container>
        );
    };
};

export default Issue1;
