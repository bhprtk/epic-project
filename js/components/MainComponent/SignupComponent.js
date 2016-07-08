import React from 'react';
import { Link, Router } from 'react-router';
import API from '../../API';
import UserStore from '../../stores/UserStore';
import DisplayErrorComponent from './DisplayErrorComponent';
import { browserHistory } from 'react-router';


import {
	FormGroup,
	FormControl
} from 'react-bootstrap';

let _state;
export default class SignupComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
		}

		this.getNewUser = this.getNewUser.bind(this);
	}

	registerUser(e) {
		e.preventDefault();
		API.registerUser(_state);
	}

	componentDidMount() {
		UserStore.on("newUser", this.getNewUser);
		console.log('this.props in componentDidMount', this.props);
	}

	componentWillUnmount() {
		UserStore.removeListener("newUser", this.getNewUser);
	}

	getNewUser() {
		let _newUser = UserStore.getNewUser();
		console.log('_newUser', _newUser);
		if(_newUser.responseJSON) {
			this.setState({error: _newUser.responseJSON.error});
			setTimeout(() => {
				this.setState({
					error: null,
				});
			}, 3000);
		}
		console.log('this.props ', this.props);
		// this.props.routes.push({
		// 	pathname: '/feed'
		// })
		browserHistory.push('/feed');
	}

	render() {
		_state = this.state;
		let errorDisplay;

		if(this.state.error) {
			errorDisplay = <DisplayErrorComponent error={this.state.error}/>;
		}

		return(
			<div style={styles.container}>
				<div className="container text-center">
					<h3>SIGN UP</h3>
					<p>Create an account and you're ready to join or create all listed start ups</p>
					{errorDisplay}

					<form
						onSubmit={this.registerUser}
						style={styles.form}
						className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
						<FormGroup>
							<FormControl
								required
								type="text"
								placeholder="Display name"
								onChange={e => this.setState({displayName: e.target.value})} />
						</FormGroup>
						<FormGroup>
							<FormControl
								required
								type="email"
								placeholder="Email"
								onChange={e => this.setState({email: e.target.value})}
								 />
						</FormGroup>
						<FormGroup>
							<FormControl
								required
								className
								type="password"
								placeholder="Password"
								onChange={e => this.setState({password: e.target.value})} />
						</FormGroup>

						<Link to="/">
							<button
								type="button"
								className="btn btn-default"
								style={styles.buttons}>
								Cancel
							</button>
						</Link>

						<button
							type="submit"
							className="btn btn-default"
							style={styles.buttons}>
							Register
						</button>
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
		background: '#885ead',
		color: '#fff',
	},
	form: {
		paddingTop: '10vh',
	},
	buttons: {
		color: '#885ead',
		width: '40%',
		margin: 10
	}
}
