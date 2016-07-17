import React from 'react';

import CoverComponent from './CoverComponent';
import EditCoverButtonsComponent from './EditCoverButtonsComponent';
import UserStore from '../../stores/UserStore';
import API from '../../API';

let _currentUser;
export default class ProfileComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		}

		this.getCurrentUser = this.getCurrentUser.bind(this);
		this.getOneUser = this.getOneUser.bind(this);
	}

	componentDidMount() {
		if(this.props.params.userId !== 'null') {
			API.getOneUser(this.props.params.userId);
		} else {
			API.getCurrentUser();
		}
		UserStore.on("getCurrentUser", this.getCurrentUser);
		UserStore.on("getOneUser", this.getOneUser);
	}

	componentWillUnmount() {
		UserStore.removeListener("getCurrentUser", this.getCurrentUser);
		UserStore.removeListener("getOneUser", this.getOneUser);
	}

	getCurrentUser() {
			this.setState({
				currentUser: UserStore.getCurrentUser()
			});
	}

	getOneUser() {
		this.setState({
			oneUser: UserStore.getOneUser()
		});
	}

	render() {
		let _editCoverButtons;
		if(this.state.currentUser || this.state.oneUser) {
			_editCoverButtons = <EditCoverButtonsComponent currentUser={this.state.currentUser || this.state.oneUser}/>
		}
		return (
			<div>
				{_editCoverButtons}
			</div>
		)
	}
}
