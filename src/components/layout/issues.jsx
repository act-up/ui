import React, {Component} from 'react';
import IssueContext from './context'

// Temporary static issue pages
import Issue1 from '../pages/issues/1';
import Issue2 from '../pages/issues/2';

// Semantic UI layout and styling
import { Accordion, Icon, Header } from 'semantic-ui-react'

class Issues extends Component {

    static contextType = IssueContext;

    state = {  activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        let value = this.context;

        let issueSelected = value.selected_issue;

        console.log("issue: ", issueSelected);

        console.log(value)

        return(

            <IssueContext.Consumer>
                {value => (
                <div>
                    <Header as='h1'>Active Issues</Header>

                    <Accordion fluid styled>

                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}>

                          <Icon name='dropdown' />
                          Trader Joe's: Please pay your workers hazard pay during the COVID-19 pandemic!
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Issue1 />
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}>

                              <Icon name='dropdown' />
                              CA Governor Gavin Newsom: Please require hazard pay for grocery workers during the COVID-19 pandemic!
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <Issue2 />
                            </Accordion.Content>

                    </Accordion>
                </div>
                )}
            </IssueContext.Consumer>

        )
    }
};

export default Issues;
