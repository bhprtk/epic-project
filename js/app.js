import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FrontPage from "./components/FrontPage/FrontPage";


const App = () => (
  <MuiThemeProvider>
    <FrontPage />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('react'));
