import React, {Component} from 'react';
import IssueContext from './context'
import Intro from '../pages/intro'
import Issue from '../pages/issue'

// Temporary static issue pages
import Issue1 from '../pages/issues/1';
import Issue2 from '../pages/issues/2';

// Semantic UI layout and styling
import { Grid } from 'semantic-ui-react'

class Content extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;

        var contentToDisplay;
        if (value.selected_issue === 0) {
            contentToDisplay = <Intro />
        } else if (value.selected_issue === 1) {
            contentToDisplay = <Issue1 />
        } else if (value.selected_issue === 2) {
            contentToDisplay = <Issue2 />
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
