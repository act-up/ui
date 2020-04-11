import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import IssueContext from './components/layout/context';

// Layout components
import { NavBarDesktop } from './components/layout/navigation';
import { Main, MainMobile } from './components/layout/main';
import { Footer, FooterMobile } from './components/layout/footer';

// Static Pages
import { About, AboutMobile } from './components/pages/about';
import { Contact, ContactMobile } from './components/pages/contact';
import { Privacy, PrivacyMobile } from './components/pages/privacy';
import { Impact, ImpactMobile } from './components/pages/impact';
import { Subscribe, SubscribeMobile } from './components/pages/subscribe';
import Suggestions from './components/pages/suggestions';
import Donate from './components/pages/donate';

import Issues from './components/layout/issues';

// Semantic UI layout and styling
import { Segment, Sidebar, Responsive, Menu, Image, Icon } from 'semantic-ui-react';

// Twitter API
/*var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: '#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let id = { id: data.statuses[i].id_str }
      // Try to Favorite the selected Tweet
      T.post('favorites/create', id, function(err, response){
        // If the favorite fails, log the error message
        if(err){
          console.log(err[0].message);
        }
        // If the favorite is successful, log the url of the tweet
        else{
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
        }
      });
    }
  } else {
    console.log(err);
  }
})*/


const VerticalSidebar = ({ visible, toggle }) => (
    <Sidebar
      as={Menu}
      animation='overlay'
      direction='right'
      icon='labeled'
      vertical
      visible={visible}
      width='thin'>
      <Menu.Item as={Link} to='/' onClick={toggle}>
        Active Issues
      </Menu.Item>
      <Menu.Item as={Link} to='/subscribe' onClick={toggle}>
        Subscribe
      </Menu.Item>
    </Sidebar>
)


class App extends Component {

    constructor(props) {
        super(props);

        this.updateIssue = (issue_num) => {
            this.setState(state => ({
                selected_issue: issue_num
            }));
        };

        this.handleSidebarToggle = this.handleSidebarToggle.bind(this);

        this.state = {
            active_issues: [],
            selected_issue: 0,
            updateIssue: this.updateIssue,
            visible: false,
            dimmed: true
        };
    }

    handleSidebarToggle = () => () =>
        this.setState((prevState) => ({ visible: !prevState.visible }))

    // Fetch all active issues from api
    /*componentDidMount() {
        fetch('http://localhost:8080/issues')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                active_issues: data,
            })
        })
        .catch(console.log)
    }*/


    render() {

        console.log("visible: ", this.state.visible);

        return (
            <div className="App">

                    {/* DESKTOP AND TABLET VIEW */}
                    <Responsive minWidth={Responsive.onlyTablet.minWidth}>

                    {/* NAVIGATION BAR DESKTOP */}
                    <Segment basic>

                        <IssueContext.Provider value={this.state}>
                            <NavBarDesktop />
                        </IssueContext.Provider>

                        {/* MAIN CONTENT DESKTOP */}
                        <Segment basic>
                            <Switch>
                                <Route exact path='/'>
                                    <IssueContext.Provider value={this.state}>
                                        <Main  />
                                    </IssueContext.Provider>
                                </Route>
                                <Route exact path='/about' component={About}></Route>
                                <Route exact path='/contact' component={Contact}></Route>
                                <Route exact path='/privacy' component={Privacy}></Route>
                                <Route exact path='/impact' component={Impact}></Route>
                                <Route exact path='/subscribe' component={Subscribe}></Route>
                                <Route exact path='/suggestions' component={Suggestions}></Route>
                                <Route exact path='/donate' component={Donate}></Route>
                                {/*<Route exact path='/1' component={Issue1}></Route>
                                <Route exact path='/2' component={Issue2}></Route>*/}
                            </Switch>

                        </Segment>
                    </Segment>
                </Responsive>



                {/* NAVIGATION BAR MOBILE */}

                {/* MOBILE RESPONSIVE VIEW */}
                <Responsive {...Responsive.onlyMobile}>
                    <IssueContext.Provider value={this.state, this.onToggle}>

                        <Menu borderless>
                          <Menu.Item as={Link} to='/'>
                            <Image size="small" src="https://raw.githubusercontent.com/act-up/ui/master/public/logo.png" />
                          </Menu.Item>
                          <Menu.Item position="right" onClick={this.handleSidebarToggle()}>
                            <Icon name="sidebar" />
                          </Menu.Item>
                        </Menu>

                        <Sidebar.Pushable>
                            {/*<VerticalSidebar visible={this.state.visible} /> */}
                            <Sidebar
                              as={Menu}
                              animation='overlay'
                              direction='right'
                              icon='labeled'
                              vertical
                              visible={this.state.visible}
                              width='thin'>
                              <Menu.Item as={Link} to='/' onClick={this.handleSidebarToggle()}>
                                Home
                              </Menu.Item>
                              <Menu.Item as={Link} to='/issues' onClick={this.handleSidebarToggle()}>
                                Active Issues
                              </Menu.Item>
                              <Menu.Item as={Link} to='/subscribe' onClick={this.handleSidebarToggle()}>
                                Subscribe
                              </Menu.Item>
                            </Sidebar>

                        <Sidebar.Pusher dimmed={this.state.dimmed && this.state.visible}>

                        {/* MAIN CONTENT MOBILE */}
                        <Segment basic>
                            <Switch>
                                <Route exact path='/'>
                                    <IssueContext.Provider value={this.state}>
                                        <MainMobile  />
                                    </IssueContext.Provider>
                                </Route>
                                <Route exact path='/issues'>
                                    <IssueContext.Provider value={this.state}>
                                        <Issues />
                                    </IssueContext.Provider>
                                </Route>
                                <Route exact path='/about' component={AboutMobile}></Route>
                                <Route exact path='/contact' component={ContactMobile}></Route>
                                <Route exact path='/privacy' component={PrivacyMobile}></Route>
                                <Route exact path='/impact' component={ImpactMobile}></Route>
                                <Route exact path='/subscribe' component={SubscribeMobile}></Route>
                                <Route exact path='/suggestions' component={Suggestions}></Route>
                                <Route exact path='/donate' component={Donate}></Route>
                                {/*<Route exact path='/1' component={Issue1}></Route>
                                <Route exact path='/2' component={Issue2}></Route>*/}
                            </Switch>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                </IssueContext.Provider>

                </Responsive>


                {/* FOOTER */}
                <Segment inverted vertical style={{ padding: '1em 3em' }}>

                    {/* DESKTOP AND TABLET VIEW */}
                    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                        <Footer />
                    </Responsive>

                    {/* MOBILE RESPONSIVE VIEW */}
                    <Responsive {...Responsive.onlyMobile}>
                        <FooterMobile />
                    </Responsive>

                </Segment>



            </div>
        );
    }
}

export default App;
