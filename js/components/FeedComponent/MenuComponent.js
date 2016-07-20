import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link } from 'react-router';
import classNames from 'classnames';

import API from '../../API';
import UserStore from '../../stores/UserStore';
import NewsComponent from './NewsComponent';

export default class MenuComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
			hoveringPeople: false,
			hoveringStartup: false,
			hoveringFind: false,
		}

		this.getCurrentUser = this.getCurrentUser.bind(this);
	}

	componentDidMount() {
		API.getCurrentUser();
		UserStore.on("getCurrentUser", this.getCurrentUser);
	}

	getCurrentUser() {
		this.setState({currentUser: UserStore.getCurrentUser()});
	}

	componentWillUnmount() {
		UserStore.removeListener("getCurrentUser", this.getCurrentUser);
	}



	render() {
		let currentUser = this.state.currentUser;
		let people = classNames({
			'animated tada': this.state.hoveringPeople,
		})
		let startup = classNames({
			'animated jello': this.state.hoveringStartup,
		})
		let find = classNames({
			'animated shake': this.state.hoveringFind,
		})
		return (
			<div>
				<div style={styles.container}>
					<If condition={currentUser}>
						<div className="container">

							<div className="text-center col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3" style={styles.displayHello}>
								<h3>Hello {currentUser.displayName}</h3>
								<p>What would you like to do?</p>
							</div>

							<div className="text-center" style={styles.mainDiv}>

								<div className={people}
									onMouseEnter={() => this.setState({hoveringPeople: true})}
									onMouseLeave={() => this.setState({hoveringPeople: false})}>
									<Link to="/feed/people" style={styles.links}>
										<div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3" style={styles.media}>
											<div style={styles.block}>
												<img style={styles.profilePic} src='./employee.png' />

												<h3>
													Find People
												</h3>

											</div>
										</div>

									</Link>
								</div>


								<div className={startup}
									onMouseEnter={() => this.setState({hoveringStartup: true})}
									onMouseLeave={() => this.setState({hoveringStartup: false})}>

									<Link to="/feed/startup" style={styles.links}>
										<div className=" col-md-6 col-sm-6" style={styles.media}>
											<div style={styles.block}>
												<img style={styles.profilePic} src='./rocket.png' />

												<h3>
													Create Startup
												</h3>

											</div>
										</div>

									</Link>
								</div>

								<div className={find}
									onMouseEnter={() => this.setState({hoveringFind: true})}
									onMouseLeave={() => this.setState({hoveringFind: false})}>

									<Link to="/feed/find" style={styles.links}>
										<div className=" col-md-6 col-sm-6" style={styles.media}>
											<div style={styles.block}>
												<img style={styles.profilePic} src='./briefcase.png' />

												<h3>
													Join Startup
												</h3>

											</div>
										</div>

									</Link>
								</div>



							</div>

						</div>


					</If>


				</div>
				<NewsComponent />

			</div>



		)
	}
}

const styles = {
	container: {
		background: '#4E80B2',
		color: '#fff',
		height: '100vh',
		marginTop: -20,
	},
	profilePic: {
		height: 100,
		width: 100,
	},
	media: {
		paddingTop: 10,
		paddingBottom: 10,
	},
	mediaBody: {
		// paddingLeft: 20,
		paddingTop: 30,
		color: '#fff'
	},
	links: {
		color: '#fff'
	},
	mainDiv: {
		paddingTop: 200
	},
	displayHello: {
		marginTop: 50,
		borderColor: '#fff',
		borderWidth: 2,
		borderStyle: 'solid',
	}
}
