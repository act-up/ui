import React, { Component } from 'react';
import Sidebar from './sidebar';
import Content from './content';
import IssueContext from './context';

// Semantic UI layout and styling
import { Grid } from 'semantic-ui-react';

class Main extends Component {

    static contextType = IssueContext;

    render() {

        return(

            <IssueContext.Consumer>
            {value => (
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <IssueContext.Provider value={value}>
                                <Sidebar />
                            </IssueContext.Provider>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <IssueContext.Provider value={value}>
                                <Content />
                            </IssueContext.Provider>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )}
            </IssueContext.Consumer>
        )

    }
}
export default Main;
