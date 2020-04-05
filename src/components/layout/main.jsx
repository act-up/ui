import React, { Component } from 'react';
import Sidebar from './sidebar';
import Content from './content';
import IssueContext from './context';

// Semantic UI layout and styling
import { Responsive, Grid } from 'semantic-ui-react';
import MobileDetect from "mobile-detect";

class Main extends Component {

    static contextType = IssueContext;

    render() {

        return(

            <Responsive>

            <IssueContext.Consumer>
            {value => (
                <Grid container columns={2}>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <IssueContext.Provider value={value}>
                                <Sidebar />
                            </IssueContext.Provider>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <IssueContext.Provider value={value}>
                                <Content />
                            </IssueContext.Provider>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )}
            </IssueContext.Consumer>

            </Responsive>
        )

    }
}
export default Main;





// Mobile vs desktop responsive

const getWidthFactory = isMobileFromSSR => () => {
  const isSSR = typeof window === "undefined";
  const ssrValue = isMobileFromSSR
    ? Responsive.onlyMobile.maxWidth
    : Responsive.onlyTablet.minWidth;

  return isSSR ? ssrValue : window.innerWidth;
};

const getInitialProps = async ({ req }) => {
  const md = new MobileDetect(req.headers["user-agent"]);
  const isMobileFromSSR = !!md.mobile();

  return {
    isMobileFromSSR,
    deviceInfo: {
      mobile: md.mobile(),
      tablet: md.tablet(),
      os: md.os(),
      userAgent: md.userAgent()
    }
  };
};
