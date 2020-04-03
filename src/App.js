import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import IssueContext from './components/layout/context'

// Layout components
import Navigation from './components/layout/navigation'
import Main from './components/layout/main'
import Footer from './components/layout/footer'

// Static Pages
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Privacy from './components/pages/privacy'
import Impact from './components/pages/impact'
import Suggestions from './components/pages/suggestions'
import Donate from './components/pages/donate'


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


class App extends Component {

    constructor(props) {
        super(props);

        this.updateIssue = (issue_num) => {
            this.setState(state => ({
                selected_issue: issue_num
            }));

        };

        this.state = {
            active_issues: [],
            selected_issue: 0,
            updateIssue: this.updateIssue
        };
    }

    // Fetch all active issues from api
    componentDidMount() {
        fetch('http://localhost:8080/issues')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                active_issues: data,
            })
        })
        .catch(console.log)
    }

    render() {

        console.log(this.state)

        return (
            <div className="App">
                <Navigation />
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
                    <Route exact path='/suggestions' component={Suggestions}></Route>
                    <Route exact path='/donate' component={Donate}></Route>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
