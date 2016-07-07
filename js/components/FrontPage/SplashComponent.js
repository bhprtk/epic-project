import React from 'react';
// import ChangeStateActions from '../../actions/ChangeStateActions';
// import { Link } from 'react-router';

export default class SplashComponent extends React.Component {

	// constructor(props) {
	// 	super(props);
	//
	// 	this.join = this.join.bind(this);
	// }

	// join() {
	// 	console.log('lol');
	// }

	render() {
		console.log('here pleaseee');
		return (
				<div className="text-center" style={styles.splash}>
					<div className="container">

						<div>
							<p style={styles.titleDiv}>create or join a startup</p>
							<h1>START ME UPasdfasdfasdf</h1>

							<button
								className="btn btn-default btn-lg"
								style={styles.buttons}>
								CREATEdasfdsfa
							</button>

							<button
								onClick={this.join}
								className="btn btn-default btn-lg"
								style={styles.buttons}>
									JOIN
							</button>
						</div>

					</div>

				</div>

		)
	}
}

const styles = {
	splash: {
		height: '100vh',
		paddingTop: 0,
		background: '#4E80B2',
		color: '#fff'
	},
	titleDiv: {
		paddingTop: '40vh'
	},
	mainTitle: {
		fontSize: '64px'
	},
	buttons: {
		margin: 10,
		// marginRight: 5,
		width: '150px',
		color: '#4E80B2'
	}
}
