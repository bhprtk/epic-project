import React from 'react';
import {hashHistory} from 'react-router';

import CoverComponent from './CoverComponent';
import EditCoverComponent from './EditCoverComponent';
import EditActions from '../../actions/EditActions'
import API from '../../API';
import UserStore from '../../stores/UserStore';

export default class EditCoverButtonsComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editProfile: false
		}

		this.saveEdit = this.saveEdit.bind(this);
		this.logout = this.logout.bind(this);
		this.logoutUser = this.logoutUser.bind(this);
	}

	componentDidMount() {
		UserStore.on('logout', this.logoutUser);
	}

	componentWillUnmount() {
		UserStore.removeListener('logout', this.logoutUser)
	}

	saveEdit() {
		EditActions.saveEdit();
		this.setState({
			editCover: false
		})
	}

	logout() {
		API.logout();
	}

	logoutUser() {
		if(UserStore.getLogoutMsg()) {
			hashHistory.push('/');
		}
	}

	render() {
		let _display = <CoverComponent currentUser={this.props.currentUser}/>;
		let _buttons = <div
										className="container">
										<button
											className="btn btn-default"
											style={styles.editCover}
											onClick={() => {this.setState({editCover: true})}}>
											Edit Profile
										</button>

										<button
											className="btn btn-default pull-right"
											style={styles.logoutBtn}
											onClick={this.logout}>
											Logout
										</button>

									</div>;
		if(this.state.editCover) {
			_display = <EditCoverComponent currentUser={this.props.currentUser}/>;
			_buttons = <div
									className="container">
									<button
										className="btn btn-default"
										style={styles.cancelBtn}
										onClick={() => {
											this.setState({editCover: false});
										}}>
										Cancel
									</button>
									<button
										className="btn btn-default"
										style={styles.saveBtn}
										onClick={this.saveEdit}>
										Save
									</button>

								</div>
		}

		return (
			<div>

				{_buttons}
				{_display}
			</div>
		)
	}
}

const styles = {
	editCover: {
		marginBottom: 10,
		marginTop: -10,
		color: 'green',
		borderColor: 'green'
	},
	logoutBtn: {
		marginBottom: 10,
		marginTop: -10,
		color: 'red',
		borderColor: 'red'
	},
	saveBtn: {
		marginRight: 10,
		width: 75,
		color: 'green',
		borderColor: 'green'
	},
	cancelBtn: {
		marginRight: 10,
		width: 75,
		color: 'red',
		borderColor: 'red'
	}
}
