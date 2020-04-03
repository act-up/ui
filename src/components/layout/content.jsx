import React, {Component} from 'react';
import IssueContext from './context'
import Intro from '../pages/intro'
import Issue from '../pages/issue'

// Semantic UI layout and styling
import { Grid } from 'semantic-ui-react'

class Content extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;

        var contentToDisplay;
        if (value.selected_issue == 0) {
            contentToDisplay = <Intro />
        } else {
            contentToDisplay = <Issue />
        }

        return(

            <IssueContext.Consumer>
                {value => (
                    <Grid>
                        {contentToDisplay}
                    </Grid>
                )}
            </IssueContext.Consumer>

        )
    }
};

export default Content;
