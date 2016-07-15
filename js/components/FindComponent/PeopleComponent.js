import React from 'react';

import API from '../../API';
import UserStore from '../../stores/UserStore';

export default class PeopleComponent extends React.Component {

	constructor(props) {
		super(props);

		this.getAllUsers = this.getAllUsers.bind(this);
	}

	componentDidMount() {
		API.getAllUsers();
		UserStore.on("getAllUsers", this.getAllUsers);
	}

	getAllUsers() {
		console.log('users', UserStore.getAllUsers());
	}

	render() {
		return (
			<h1>PeopleComponent</h1>
		)
	}
}
