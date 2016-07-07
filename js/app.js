import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainComponent from "./components/MainComponent/MainComponent";
import LoginComponent from "./components/MainComponent/LoginComponent";
import SignupComponent from "./components/MainComponent/SignupComponent";

import { Router, Route, hashHistory } from 'react-router'

const App = () => (
  <MuiThemeProvider>
    <MainComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
      <Route path="/signup" component={SignupComponent}/>
  </Router>
  , document.getElementById('react'));
