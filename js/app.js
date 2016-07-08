import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainComponent from "./components/MainComponent/MainComponent";
import LoginComponent from "./components/MainComponent/LoginComponent";
import SignupComponent from "./components/MainComponent/SignupComponent";
import FeedComponent from "./components/FeedComponent/FeedComponent";
import ProfileComponent from "./components/FeedComponent/ProfileComponent";
import Navbar2 from "./components/MainComponent/Navbar2";
import { Router, Route, browserHistory } from 'react-router'

const App = () => (
  <MuiThemeProvider>
    <MainComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainComponent} />
      <Route path="signup" component={SignupComponent}/>
      <Route path="feed" component={FeedComponent}>
        <Route path="profile" component={ProfileComponent}/>
      </Route>
  </Router>
  , document.getElementById('react'));
