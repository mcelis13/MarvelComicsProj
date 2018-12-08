import React, { Component } from 'react';
import Nav from './Nav.js';
import MainImageContainer from './MainImageContainer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class Home extends Component {
  render(){
    return (
      <Router>
        < React.Fragment >
        <div>
           <Nav />
           <MainImageContainer />
        </div>
        <Route path='/nav' component={ Nav }/>
        <Route path='/mainImage' component={ MainImageContainer }/>
        < /React.Fragment >
      </Router>

    )
  }
}
