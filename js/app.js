import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainComponent from "./components/MainComponent/MainComponent";
import LoginComponent from "./components/MainComponent/LoginComponent";

import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

const App = () => (
  <MuiThemeProvider>
    <MainComponent />
  </MuiThemeProvider>
);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('react'));
