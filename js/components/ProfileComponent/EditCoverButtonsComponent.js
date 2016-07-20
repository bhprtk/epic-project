import React from 'react';
import {hashHistory} from 'react-router';

import CoverComponent from './CoverComponent';
import EditCoverComponent from './EditCoverComponent';
import EditActions from '../../actions/EditActions'
import API from '../../API';
import UserStore from '../../stores/UserStore';
import ManageCompanies from './ManageCompanies';

export default class EditCoverButtonsComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editProfile: false,
			showManageCompanies: false,
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
											<strong>Edit Profile</strong>
										</button>

										<button
											className="btn btn-default"
											style={styles.manageCompanies}
											onClick={() => {this.setState({showManageCompanies: true})}}>
											<strong>Manage Companies</strong>
										</button>

										<button
											className="btn btn-default pull-right"
											style={styles.logoutBtn}
											onClick={this.logout}>
											<strong>Logout</strong>
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
										<strong>Cancel</strong>
									</button>
									<button
										className="btn btn-default"
										style={styles.saveBtn}
										onClick={this.saveEdit}>
										<strong>Save</strong>
									</button>

								</div>;
		}
		if(this.state.showManageCompanies) {
			_buttons = <div className="container">
				<button
					className="btn btn-default"
					style={styles.cancelBtn}
					onClick={() => {
						this.setState({showManageCompanies: false});
					}}>
					<strong>Cancel</strong>
				</button>
				<button
					className="btn btn-default"
					style={styles.saveBtn}
					onClick={() => console.log('yup')}>
					<strong>Save</strong>
				</button>

			</div>;

		}

		return (
			<div>

					{_buttons}


				<If condition={!this.state.showManageCompanies}>
					{_display}
				</If>

				<If condition={this.state.showManageCompanies}>
					<ManageCompanies currentUser={this.props.currentUser}/>
				</If>

			</div>
		)
	}
}

const styles = {
	editCover: {
		marginBottom: 10,
		marginTop: -10,
		color: 'green',
		borderColor: 'green',
		borderWidth: 2

	},
	logoutBtn: {
		marginBottom: 10,
		marginTop: -10,
		color: '#d9534f',
		borderColor: '#d9534f',
		borderWidth: 2

	},
	saveBtn: {
		marginRight: 10,
		width: 75,
		color: '#449d44',
		borderColor: '#449d44',
		borderWidth: 2

	},
	cancelBtn: {
		marginRight: 10,
		width: 75,
		color: '#d9534f',
		borderColor: '#d9534f',
		borderWidth: 2

	},
	manageCompanies: {
		marginLeft: 10,
		marginBottom: 10,
		marginTop: -10,
		color: '#337ab7',
		borderColor: '#337ab7',
		borderWidth: 2

	}
}
