import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import UserActions from '../../actions/UserActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import API from '../../API';

import {
	Button,
} from 'react-bootstrap';

export default class LoginComponent extends React.Component {
	constructor(props) {
		super(props);

	}


	render() {
		return(
			<div style={styles.container}>
				<div className="container text-center">
					<h3>LOG IN</h3>
					<p>Log in with the email address you registered with and start joining new startups</p>
					<form
						className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3"
						style={styles.form}>
						<div className="form-group">
							<input type="email" className="form-control" placeholder="Email"/>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Password"/>
						</div>

					</form>
				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		paddingTop: '20vh',
		height: '100vh',
		background: '#445D68',
		color: '#fff',
	},
	form: {
		marginTop: 50
	}
}
