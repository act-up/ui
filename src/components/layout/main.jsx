import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

// Campaign page
import Campaigns from './campaigns'

// Static Pages
import About from '../pages/about'
import Contact from '../pages/contact'
import Privacy from '../pages/privacy'
import Impact from '../pages/impact'
import Suggestions from '../pages/suggestions'
import Donate from '../pages/donate'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Campaigns}></Route>
    <Route exact path='/campaigns' component={Campaigns}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/privacy' component={Privacy}></Route>
    <Route exact path='/impact' component={Impact}></Route>
    <Route exact path='/suggestions' component={Suggestions}></Route>
    <Route exact path='/donate' component={Donate}></Route>
  </Switch>
);

export default Main;
