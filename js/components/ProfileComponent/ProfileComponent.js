import React from 'react';

import CoverComponent from './CoverComponent';
import UserStore from '../../stores/UserStore';
import API from '../../API';

export default class ProfileComponent extends React.Component {
	constructor(props) {
		super(props);

		this.getCurrentUser = this.getCurrentUser.bind(this);
	}

	componentWillMount() {
		API.getCurrentUser();
	}

	componentDidMount() {
		UserStore.on("getCurrentUser", this.getCurrentUser);
	}

	getCurrentUser() {
		this.setState({
			currentUser: UserStore.getCurrentUser()
		});
		console.log('this.state in getCurrentUser', this.state);
	}

	render() {
		console.log('this.state', this.state);
		return (
			<CoverComponent currentUser={this.state.currentUser}/>
		)
	}
}
