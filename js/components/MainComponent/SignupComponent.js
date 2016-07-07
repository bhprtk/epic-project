import React from 'react';

import {
	FormGroup,
	FormControl
} from 'react-bootstrap';

export default class SignupComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div style={styles.container}>
				<div className="container text-center">
					<h3>SIGN UP</h3>

					<form
						className="col-md-4 col-md-offset-4">
						<FormGroup>
							<FormControl type="text" placeholder="Email" />
						</FormGroup>
						<FormGroup>
							<FormControl type="password" placeholder="Password" />
						</FormGroup>
					</form>

				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		paddingTop: '40vh',
		height: '100vh',
		background: '#885ead',
		color: '#fff',
	}
}
