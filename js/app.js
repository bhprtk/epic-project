import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainComponent from "./components/MainComponent/MainComponent";
import LoginComponent from "./components/MainComponent/LoginComponent";

import {
  Router,
  Route,
  IndexRoute
} from 'react-router';

const App = () => (
  <MuiThemeProvider>
    <MainComponent />
  </MuiThemeProvider>
);

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={MainComponent}/>
      <Route path="signup" component={LoginComponent}/>
    </Route>
  </Router>
), document.getElementById('react'));
