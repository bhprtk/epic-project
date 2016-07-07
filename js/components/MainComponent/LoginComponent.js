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

let _state;
export default class LoginComponent extends React.Component {
	constructor(props) {
		super(props);

	}

	onSubmit(e) {
		e.preventDefault();
		// UserActions.userRegister(_state);
		API.registerUser(_state);
	}

	render() {
		_state = this.state;
		return (
			<MuiThemeProvider>
			<div className="container text-center" style={container}>
				<div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
					<h2>Sign up</h2>
					<hr/>

					<Paper
						style={style}
						zDepth={5}
						className="col-md-12 col-xs-12 col-sm-12"
						>

						<div className="col-md-6 col-xs-12 col-sm-12">

							<form
								onSubmit={this.onSubmit}>

								<TextField
									style={textFieldStyle}
									floatingLabelText="Display Name"
									onChange={e => this.setState({displayName: e.target.value})}
									required
									/><br />
								<TextField
									style={textFieldStyle}
									type="email"
									floatingLabelText="Email"
									onChange={e => this.setState({email: e.target.value})}
									required
									/><br />
								<TextField
									style={textFieldStyle}
									floatingLabelText="Password"
									type="password"
									onChange={e => this.setState({password: e.target.value})}
									required
									/><br />
								<Button
									type="submit"
									bsStyle="primary"
									bsSize="large"
									style={signupBtn}
									block>
									Sign up
								</Button>
							</form>

						</div>



					</Paper>

				</div>
			</div>
		</MuiThemeProvider>
		)
	}
}

const container = {
	// background: '#4E80B2',
	height: "100vh",
	width: "100%",
}

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
	padding: 10,
	marginTop: 50,
	height: 500,
	background: '#2A364A'
};

const input = {
	margin: 20,
}

const textFieldStyle = {
	width: '100%'
}

const signupBtn = {
	marginTop: 20
}
